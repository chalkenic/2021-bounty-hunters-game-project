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

mongoose
  .connect(database)
  .then(() => console.log("MongoDB connection established."))
  .catch((err) => console.log(err));

// Route usage
app.use("/api/DungeonCards", dungeonCards);

const port = process.env.port || 5000;
const players = [];
io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);
  socket.on("PING", () => {
    console.log("received ping!");
    socket.emit("PONG", JSON.stringify(players));
  });
  socket.on("ADDING_PLAYER", (data) => {
    console.log("receiving player", data);
    players.push({ id: socket.id, name: data });
    socket.emit("ADDING_COMPLETED", JSON.stringify(players));
  });
  socket.on("RESETTING_PLAYERS", () => {
    players.length = 0;
    socket.emit("PLAYERS_RESET", JSON.stringify(players));
  });
});

server.listen(port, () => console.log(`Server started on port ${port}`));
