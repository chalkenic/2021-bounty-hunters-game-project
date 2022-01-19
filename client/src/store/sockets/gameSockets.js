import { io } from "socket.io-client";
import { allPlayerActions } from "../slices/allPlayers-slice";
import { progressBarActions } from "../slices/progressBar-slice";
import { roomDeckPyramidActions } from "../slices/roomDeck_Pyramid-slice";
import { setPlayerAsMaster, setPlayer } from "../slices/currentPlayer-slice";

const gameSockets = (dispatch) => {
  const socket = io("http://localhost:5000");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("ADDING_COMPLETED", (data) => {
    // console.log("data", JSON.parse(data));
    dispatch(allPlayerActions.addPlayersToGame(JSON.parse(data)));
    dispatch(setPlayer(JSON.parse(data)));
  });

  socket.on("SENDING_ID", (data) => {
    dispatch(setPlayer(data));
  });

  socket.on("ADDING_COMPLETED_MASTER", (data) => {
    // console.log("data", JSON.parse(data));
    dispatch(allPlayerActions.addPlayersToGame(JSON.parse(data)));
    // console.log("data again", JSON.parse(data));
    dispatch(setPlayerAsMaster(JSON.parse(data)));
  });

  // socket.on("SAVED_LOCAL_PLAYER", (data) => {
  //   console.log("local 3");
  //   dispatch(setCurrentDetails(JSON.parse(data)));
  // });

  socket.on("PLAYER_CREATED_MASTER", (data) => {
    // console.log("current p*layer master data", JSON.parse(data));
  });

  socket.on("PLAYER_CREATED", (data) => {
    // console.log("current player data:", JSON.parse(data));
  });

  socket.on("VALUE_ADDED", (data) => {
    console.log(data);
    dispatch(allPlayerActions.assignCardPlayedValue(JSON.parse(data)));
  });

  socket.on("GAME_RESET", () => {
    dispatch(allPlayerActions.resetPlayers());
    dispatch(progressBarActions.resetProgress());
    dispatch(roomDeckPyramidActions.resetDeck());
    // dispatch(roomDeckPyramidActions.resetDeck());
    console.log("Game reset");
  });

  socket.on("PROGRESS_ADDED", (data) => {
    // console.log("socket test progress");
    // console.log("value to be added to progress bars:", data);
    dispatch(progressBarActions.setProgress(data));
    dispatch(allPlayerActions.resetTurn());
  });

  socket.on("PROGRESS_RESET", () => {
    // console.log("i am receiving");
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
    dispatch(roomDeckPyramidActions.setGameDeck(JSON.parse(data.deck)));
    dispatch(roomDeckPyramidActions.setCurrentCard(JSON.parse(data.current)));
  });

  socket.on("PLAYER_ENDED_TURN", (data) => {
    console.log("data to change:", data);
    dispatch(allPlayerActions.playerChosenCard(data));
  });

  return socket;
};

export default gameSockets;
