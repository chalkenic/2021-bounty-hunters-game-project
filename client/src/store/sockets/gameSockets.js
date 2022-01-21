import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { allPlayerActions } from "../slices/allPlayers-slice";
import { progressBarActions } from "../slices/progressBar-slice";
import { roomDeckPyramidActions } from "../slices/roomDeck_Pyramid-slice";
import { setPlayerAsMaster, setPlayer } from "../slices/currentPlayer-slice";
import { historyActions } from "../slices/gameHistory-slice";
import { playerDeckActions } from "../slices/playerCardDeck-slice";

const gameSockets = (dispatch) => {
  const socket = io("http://localhost:5000");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  // Add player to game state.
  socket.on("ADDING_COMPLETED", (data) => {
    dispatch(allPlayerActions.addPlayersToGame(JSON.parse(data)));
    dispatch(setPlayer(JSON.parse(data)));
  });

  // Add player to game state. Set player as master.
  socket.on("ADDING_COMPLETED_MASTER", (data) => {
    dispatch(allPlayerActions.addPlayersToGame(JSON.parse(data)));
    dispatch(setPlayerAsMaster(JSON.parse(data)));
  });

  // Reset game and player states to original state.
  socket.on("GAME_RESET", () => {
    dispatch(allPlayerActions.resetPlayers());
    dispatch(progressBarActions.resetProgress());
    dispatch(roomDeckPyramidActions.resetDeck());
    dispatch(historyActions.resetRecords());
    dispatch(playerDeckActions.resetHand());
    console.log("Game reset");
  });

  // Append game state data from end of turn to respective states.
  socket.on("PROGRESS_ADDED", (data) => {
    let gameState = JSON.parse(data);

    dispatch(historyActions.addTurnDetailsRecord(gameState));

    dispatch(progressBarActions.setProgress(gameState.progress));
    dispatch(allPlayerActions.updatePlayers(gameState.players));
    dispatch(allPlayerActions.resetTurn());
  });

  // Reset progress bar for local states.
  socket.on("PROGRESS_RESET", () => {
    dispatch(progressBarActions.resetProgress());
  });

  // Build room deck on local player states; assign current card chosen from server.
  socket.on("ROOM_CARD_DECK_BUILT", (data) => {
    dispatch(roomDeckPyramidActions.setGameDeck(JSON.parse(data.deck)));
    dispatch(roomDeckPyramidActions.setCurrentCard(JSON.parse(data.current)));
  });

  socket.on("PLAYER_ENDED_TURN", (data) => {
    console.log("data to change:", data);
    dispatch(allPlayerActions.playerChosenCard(data));
  });

  socket.on("ROOM_COMPLETED", (data) => {
    let gameState = JSON.parse(data);
    dispatch(allPlayerActions.updatePlayers(gameState.players));
    dispatch(allPlayerActions.resetTurn());
    dispatch(roomDeckPyramidActions.setCurrentCard(gameState.current));
    dispatch(roomDeckPyramidActions.setGameDeck(gameState.room));
    dispatch(progressBarActions.setProgressMax(gameState.current.health));
  });

  return socket;
};

export default gameSockets;
