var helpers = require("./helpers/LogicHelpers.js");

// Basic MongoDb server created in order to implement decks into game.
// NOT CURRENTLY MVP
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

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = require("./config/Keys").mongoURI;

// Access MongoDB (BEYOND MVP)
mongoose
  .connect(database)
  .then(() => console.log("MongoDB connection established."))
  .catch((err) => console.log(err));

// Server port
const port = process.env.port || 5000;

let players = [];
let roomCards = {};
let progress = { value: 0, max: 200 };
let roundCardValues = [];

io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);

  // API call parses new player data into server for state access.
  socket.on("ADDING_PLAYER", (data) => {
    if (players.length === 0) {
      players.push({
        ...data,
        id: socket.id,
        key: players.length,
        master: true,
        turnHasEnded: false,
        receivedDamage: false,
      });

      // First player created marked as master. Game updates go by their data to largely
      // avoid de-sync.
      io.emit("ADDING_COMPLETED_MASTER", JSON.stringify(players));
    } else {
      players.push({
        ...data,
        id: socket.id,
        key: players.length,
        master: false,
        turnHasEnded: false,
        receivedDamage: false,
      });
      io.emit("ADDING_COMPLETED", JSON.stringify(players));
    }
  });

  socket.on("ADDING_LOCAL_PLAYER", () => {
    const newPlayer = players.find((p) => p.id === socket.id);

    socket.emit("SAVED_LOCAL_PLAYER", JSON.stringify(newPlayer.id));
  });

  socket.on("RESET_GAME", (data) => {
    players = [];
    roomCards = [];
    currentRoomCard = {};
    roundCardValues = [];
    progress = { value: 0, max: 0 };
    io.emit("GAME_RESET", data);
  });

  socket.on("UPDATE_PLAYER", (data) => {
    const player = JSON.parse(data);
    players.map((p) => (player.id === p.id ? player : p));
    io.emit("ADDING_COMPLETED", JSON.stringify(players));
  });

  socket.on("ADDING_PLAYER_VALUE", (data) => {
    let scoreCompleted = false;
    players = players.map((p) =>
      p.id === socket.id
        ? {
            ...p,
            chosenCardValue: parseInt(data),
            turnHasEnded: true,
            receivedDamage: false,
          }
        : { ...p }
    );
    let allTurnsEnded = true;
    players.map((p) => {
      if (!p.turnHasEnded) {
        allTurnsEnded = false;
      }
    });

    // If every player's turn has ended.
    if (allTurnsEnded) {
      // Scroll through all players to apply game state updates.
      for (let p = 0; p < players.length; p++) {
        // Apply player's value into server's progress bar
        progress.value = helpers.increaseProgress(
          progress.value,
          parseInt(players[p].chosenCardValue)
        );

        // Assign value submitted by player into array in order to track on logs.
        roundCardValues.push(players[p].chosenCardValue);

        // Mark turn as ended and reset their card value.
        players[p].turnHasEnded = false;
        players[p].chosenCardValue = 0;

        // Check if player's card submission exceeds current card's hp.
        if (progress.value >= progress.max && !scoreCompleted) {
          // Apply room card's score to player.
          players[p] = helpers.applyScore(players[p], currentRoomCard.score);

          // Confirm score given to player.
          scoreCompleted = true;

          // Check if game ends. More than 1 card remaining means another  room
          // can be dealt.
          if (roomCards.length > 1) {
            // Reset current card to last in deck, assign new values to server.
            roomCards.pop();
            currentRoomCard = roomCards[roomCards.length - 1];

            progress = helpers.resetProgress(progress, currentRoomCard.health);

            // API call to client that provides new game state.
            io.emit(
              "ROOM_COMPLETED",
              JSON.stringify({
                room: roomCards,
                players: players,
                current: currentRoomCard,
              })
            );
            // Conditional ends game and emits final data to client.
          } else {
            roomCards.pop();
            io.emit(
              "GAME_COMPLETED",
              JSON.stringify({ players: players, roomCards: roomCards })
            );
          }

          // If round doesn't end, test for damage.
        } else {
          // Check if more than 1 player.
          if (players.length >= 2) {
            players[p] = helpers.rollDamage(players[p], p, currentRoomCard);

            // Single player target has a higher chance to miss room card hit.
          } else {
            players[p] = helpers.rollLoneDamage(players[p], currentRoomCard);
          }
        }
      }
      //  Shuffle  player array in order to assign turn order.
      helpers.shuffle(players);

      // Apply new turn order to players
      if (players.length > 1) {
        for (let turnOrder = 0; turnOrder < players.length; turnOrder++) {
          players[turnOrder].turn = turnOrder + 1;
        }
      }

      // Send back updated game state for new round
      var data = {
        progress: progress.value,
        players: players,
        card: currentRoomCard,
        cardValues: roundCardValues,
      };

      io.emit("PROGRESS_ADDED", JSON.stringify(data));
    } else {
      // Emit only simple data to sockets to inform specific player has ended turn.
      io.emit("PLAYER_ENDED_TURN", socket.id);
    }
  });

  socket.on("END_TURN_BAR", () => {
    progress.value = 0;
    io.emit("PROGRESS_RESET");
  });

  socket.on("ADDING_ROOM_CARDS", (data) => {
    if (roomCards.length === 0) {
      roomCards = data.payload;
      currentRoomCard = roomCards[roomCards.length - 1];

      if (players.length == 1) {
        currentRoomCard.target = 1;
        players[0].energy = 200;
      }

      progress.max = currentRoomCard.health;
    }
    io.emit("ROOM_CARD_DECK_BUILT", {
      deck: JSON.stringify(roomCards),
      current: JSON.stringify(currentRoomCard),
    });
  });
});

server.listen(port, () => console.log(`Server started on port ${port}`));
