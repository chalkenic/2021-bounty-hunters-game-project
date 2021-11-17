const express = require("express");
const mongoose = require("mongoose");

const dungeonCards = require("./routes/api/DungeonCards");

const app = express();

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

app.listen(port, () => console.log(`Server started on port ${port}`));
