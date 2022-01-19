import { take, takeEvery } from "redux-saga/effects";
import {
  submitPlayer,
  resetGame,
  updatePlayer,
  getPlayers,
  playerEndTurn,
  saveLocalPlayer,
  requestId,
  addValueToPlayer,
} from "../actions/playerActions";

// * symbol turns function into generator, allowing multiple return values.
// code adapted from JavaScript Generators info. available at:
// https://javascript.info/generators
export function* handlePlayerCommands(appSocket) {
  const socket = appSocket;

  // Add new player to game server.
  yield takeEvery(submitPlayer, (player) => {
    socket.emit("ADDING_PLAYER", player.payload);
  });

  yield takeEvery(requestId, () => {
    socket.emit("REQUEST_ID");
  });

  yield takeEvery(resetGame, () => {
    socket.emit("RESETTING_GAME");
  });

  yield takeEvery(updatePlayer, (player) => {
    socket.emit("UPDATING_PLAYER", player.payload);
  });

  yield takeEvery(getPlayers, () => {
    socket.emit("GET_PLAYERS");
  });

  yield takeEvery(playerEndTurn, (player) => {
    socket.emit("PLAYER_END_TURN", player.payload);
  });

  yield takeEvery(saveLocalPlayer, (player) => {
    console.log("local 1");
    socket.emit("ADDING_LOCAL_PLAYER", player.payload);
  });

  //Append value of card to player in server.
  yield takeEvery(addValueToPlayer, (value) => {
    socket.emit("ADDING_PLAYER_VALUE", value.payload);
  });
}
