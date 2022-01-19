// import {  rollHitChance } from "./helpers/LogicHelpers.js";

var helperFunctions = require("./helpers/LogicHelpers.js");

const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const dungeonCards = require("./routes/api/DungeonCards");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = require("./config/Keys").mongoURI;
const { syncIndexes } = require("./models/DungeonDeck");

mongoose
  .connect(database)
  .then(() => console.log("MongoDB connection established."))
  .catch((err) => console.log(err));

// Route usage
app.use("/api/DungeonCards", dungeonCards);

const port = process.env.port || 5000;
const sessionsMap = {};
let players = [];
let roomCards = {};
let currentRoomCard = {};
let progress = { value: 0, max: 200 };
// let unusedCards = [];

io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);

  socket.on("REQUEST_ID", () => {
    socket.emit("SENDING_ID", socket.id);
  });

  socket.on("ADDING_PLAYER", (data) => {
    if (players.length === 0) {
      players.push({
        ...data,
        id: socket.id,
        key: players.length,
        master: true,
        turnHasEnded: false,
      });

      io.emit("ADDING_COMPLETED_MASTER", JSON.stringify(players));

      // const newPlayerMaster = players.find((p) => p.id === socket.id);

      // socket.broadcast
      //   .to(newPlayerMaster.id)
      //   .emit("PLAYER_CREATED_MASTER", JSON.stringify(newPlayerMaster));
    } else {
      players.push({
        ...data,
        id: socket.id,
        key: players.length,
        master: false,
        turnHasEnded: false,
      });
      io.emit("ADDING_COMPLETED", JSON.stringify(players));

      // const newPlayer = players.find((p) => p.id === socket.id);

      // socket.broadcast
      //   .to(newPlayer.id)
      //   .emit("PLAYER_CREATED_MASTER", JSON.stringify(newPlayer));
    }
  });

  socket.on("ADDING_LOCAL_PLAYER", () => {
    const newPlayer = players.find((p) => p.id === socket.id);

    socket.emit("SAVED_LOCAL_PLAYER", JSON.stringify(newPlayer.id));
  });

  socket.on("GET_PLAYERS", (data) => {
    io.emit("SENDING_PLAYERS", JSON.stringify(data));
  });

  socket.on("RESETTING_GAME", () => {
    players = [];
    roomCards = [];
    currentRoomCard = {};
    progress = { value: 0, max: 0 };
    io.emit("GAME_RESET");
  });

  socket.on("UPDATE_PLAYER", (data) => {
    const player = JSON.parse(data);
    players.map((p) => (player.id === p.id ? player : p));
    io.emit("ADDING_COMPLETED", JSON.stringify(players));
  });

  // socket.on("PLAYER_END_TURN", (data) => {
  //   const player = JSON.parse(data);

  //   players.map((p) => (player.id === p.id ? player : p));

  //   let allTurnsEnded = true;
  //   players.map((p) => {
  //     if (!p.turnEnded) {
  //       allTurnsEnded = false;
  //     }
  //   });

  //   if (allTurnsEnded) {
  //     // find master player socket id
  //     const master = players.find((p) => p.master === true);

  //     socket.broadcast.to(master.id).emit("END_TURN", JSON.stringify(players)); //sending to individual socketid
  //   }
  // });

  socket.on("ADDING_PLAYER_VALUE", (data) => {
    players = players.map((p) =>
      p.id === socket.id
        ? { ...p, chosenCardValue: parseInt(data), turnHasEnded: true }
        : { ...p }
    );

    // console.log

    let allTurnsEnded = true;
    players.map((p) => {
      if (!p.turnHasEnded) {
        allTurnsEnded = false;
      }
    });

    //     if (
    //   currentRoomCard.target.includes(idx) &&
    //   rollHitChance(currentRoomCard.hitChance)
    // ) {
    //   // console.log("player", players[idx], "taking damage!");
    //   dispatch(
    //     allPlayerActions.reducePlayerEnergy({
    //       id: players[idx].id,
    //       damage: currentRoomCard.damage,
    //     })

    if (allTurnsEnded) {
      for (let p = 0; p < players.length; p++) {
        progress.value += parseInt(players[p].chosenCardValue);
        players[p].turnHasEnded = false;
        players[p].chosenCardValue = 0;

        console.log(currentRoomCard.target);
        console.log(
          helperFunctions.rollDamageChance(currentRoomCard.hitChance)
        );

        if (
          currentRoomCard.target.includes(p) &&
          helperFunctions.rollDamageChance(currentRoomCard.hitChance)
        ) {
          players[p].energy -= parseInt(currentRoomCard.damage);
        }
      }

      var data = { progress: progress.value, players: players };
      io.emit("PROGRESS_ADDED", JSON.stringify(data));
    } else {
      io.emit("PLAYER_ENDED_TURN", socket.id);
    }
    // io.emit("VALUE_ADDED", JSON.stringify({ value: data, id: socket.id }));
  });

  socket.on("END_TURN_BAR", () => {
    progress.value = 0;
    io.emit("PROGRESS_RESET");
  });

  socket.on("ADDING_ROOM_CARDS", (data) => {
    let cards = JSON.stringify(data);
    if (roomCards.length === 0) {
      roomCards = data.payload;
      currentRoomCard = roomCards[roomCards.length - 1];

      progress.max = currentRoomCard.health;
    }
    io.emit("ROOM_CARD_DECK_BUILT", {
      deck: JSON.stringify(roomCards),
      current: JSON.stringify(currentRoomCard),
    });
  });

  socket.on("CHOOSING_CURRENT_ROOM", (data) => {
    currentRoomCard = data;
    io.emit("CURRENT_ROOM_CONFIRMED", data);
  });

  socket.on("GET_CURRENT_ROOM", () => {
    io.emit("SENDING_CURRENT_ROOM", {
      deck: JSON.stringify(roomCards),
      current: JSON.stringify(currentRoomCard),
    });
  });
});

server.listen(port, () => console.log(`Server started on port ${port}`));

// socket.emit('message', "this is a test"); //sending to sender-client only
// socket.broadcast.emit('message', "this is a test"); //sending to all clients except sender
// socket.broadcast.to('game').emit('message', 'nice game'); //sending to all clients in 'game' room(channel) except sender
// socket.to('game').emit('message', 'enjoy the game'); //sending to sender client, only if they are in 'game' room(channel)
// socket.broadcast.to(socketid).emit('message', 'for your eyes only'); //sending to individual socketid
// io.emit('message', "this is a test"); //sending to all clients, include sender
// io.in('game').emit('message', 'cool game'); //sending to all clients in 'game' room(channel), include sender
// io.of('myNamespace').emit('message', 'gg'); //sending to all clients in namespace 'myNamespace', include sender
// socket.emit(); //send to all connected clients
// socket.broadcast.emit(); //send to all connected clients except the one that sent the message
// socket.on(); //event listener, can be called on client to execute on server
// io.sockets.socket(); //for emiting to specific clients
// io.sockets.emit(); //send to all connected clients (same as socket.emit)
// io.sockets.on() ; //initial connection from a client.
