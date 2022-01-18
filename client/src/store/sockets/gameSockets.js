import { io } from "socket.io-client";
import { gamePlayerActions } from "../slices/gamePlayers-slice";
import { progressBarActions } from "../slices/progressBar-slice";
import { roomDeckPyramidActions } from "../slices/roomDeck_Pyramid-slice";
import { setPlayerAsMaster } from "../slices/currentPlayer-slice";

const gameSockets = (dispatch) => {
  const socket = io("http://localhost:5000");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("ADDING_COMPLETED", (data) => {
    console.log("data", JSON.parse(data));
    dispatch(gamePlayerActions.addPlayersToGame(JSON.parse(data)));
  });

  socket.on("ADDING_COMPLETED_MASTER", (data) => {
    console.log("data", JSON.parse(data));
    dispatch(gamePlayerActions.addPlayersToGame(JSON.parse(data)));
    dispatch(setPlayerAsMaster());
  });

  socket.on("GAME_RESET", () => {
    dispatch(gamePlayerActions.resetPlayers());
    dispatch(progressBarActions.resetProgress());
    // dispatch(roomDeckPyramidActions.resetDeck());
    console.log(" game on server reset");
  });

  socket.on("PROGRESS_ADDED", (data) => {
    console.log("socket test progress");
    console.log("value to be added to progress bars:", data);
    dispatch(progressBarActions.increaseProgress(data));
  });

  socket.on("PROGRESS_RESET", () => {
    console.log("i am receiving");
    dispatch(progressBarActions.resetProgress());
  });

  socket.on("SENDING_PLAYERS", (data) => {
    return data;
  });

  socket.on("CURRENT_ROOM_CONFIRMED", (data) => {
    console.log("dungeon card data:", data);
    dispatch(roomDeckPyramidActions.setCurrentCard(data));
  });

  socket.on("SENDING_CURRENT_ROOM", (data) => {
    dispatch(roomDeckPyramidActions.setGameDeck(JSON.parse(data.deck)));
    dispatch(roomDeckPyramidActions.setCurrentCard(JSON.parse(data.current)));
  });

  socket.on("ROOM_CARD_DECK_BUILT", (data) => {
    console.log("dungeon cards inside gamesocket as data", data);
    console.log("dungeon cards inside gamesocket", JSON.parse(data.deck));
    console.log("current card inside gamesocket", JSON.parse(data.current));
    dispatch(roomDeckPyramidActions.setGameDeck(JSON.parse(data.deck)));
    dispatch(roomDeckPyramidActions.setCurrentCard(JSON.parse(data.current)));
  });

  socket.on("END_TURN", (players) => {});

  return socket;
};

export default gameSockets;
