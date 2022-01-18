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
let players = [];
let roomCards = {};
let currentRoomCard = {};
let progress = { value: 0, max: 200 };
// let unusedCards = [];

io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);

  socket.on("ADDING_PLAYER", (data) => {
    console.log("receiving player", data);

    if (players.length === 0) {
      players.push({
        ...data,
        id: socket.id,
        key: players.length,
        master: true,
      });

      console.log("current player count:", players);

      io.emit("ADDING_COMPLETED_MASTER", JSON.stringify(players));
    } else {
      players.push({
        ...data,
        id: socket.id,
        key: players.length,
        master: false,
      });
      io.emit("ADDING_COMPLETED", JSON.stringify(players));
    }
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

  socket.on("PLAYER_END_TURN", (data) => {
    const player = JSON.parse(data);

    players.map((p) => (player.id === p.id ? player : p));

    let allTurnsEnded = true;
    players.map((p) => {
      if (!p.turnEnded) {
        allTurnsEnded = false;
      }
    });

    if (allTurnsEnded) {
      // find master player socket id
      const master = players.find((p) => p.master === true);

      socket.broadcast.to(master.id).emit("END_TURN", JSON.stringify(players)); //sending to individual socketid
    }
  });

  socket.on("INCREASING_PROGRESS", (data) => {
    progress.value += data;
    io.emit("PROGRESS_ADDED", data);
  });

  socket.on("RESETTING_PROGRESS", () => {
    console.log("NMSFKJSFNDFAKDLSEF");
    progress.value = 0;
    io.emit("PROGRESS_RESET");
  });

  socket.on("ADDING_ROOM_CARDS", (data) => {
    let cards = JSON.stringify(data);
    console.log("1?????");
    console.log("2...!", data);
    console.log("3...!", data.payload);
    console.log("oh no!", cards);
    console.log(data.payload.length);
    if (roomCards.length === 0) {
      console.log("HELLO AGAIN???");

      roomCards = data.payload;
      currentRoomCard = roomCards[roomCards.length - 1];

      progress.max = currentRoomCard.health;
    }
    console.log("HELLO SIR!", roomCards);
    io.emit("ROOM_CARD_DECK_BUILT", {
      deck: JSON.stringify(roomCards),
      current: JSON.stringify(currentRoomCard),
    });
  });

  socket.on("CHOOSING_CURRENT_ROOM", (data) => {
    currentRoomCard = data;
    console.log("am i firing loilololololo?");
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
