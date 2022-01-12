import { takeEvery } from "redux-saga/effects";
import {
  testAction,
  submitPlayer,
  resetPlayers,
} from "../actions/playerActions";

// * symbol turns function into generator, allowing multiple return values.
// code adapted from JavaScript Generators info. available at:
// https://javascript.info/generators
export function* handleCommands(appSocket) {
  const socket = appSocket;
  yield takeEvery(testAction, () => {
    console.log("hello sir");
    socket.emit("PING");
  });

  yield takeEvery(submitPlayer, (player) => {
    console.log("creating player...", player);
    socket.emit("ADDING_PLAYER", player.payload);
  });

  yield takeEvery(resetPlayers, () => {
    socket.emit("RESETTING_PLAYERS");
  });
}
