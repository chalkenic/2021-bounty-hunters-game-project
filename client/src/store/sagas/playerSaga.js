import { takeEvery } from "redux-saga/effects";
import {
  submitPlayer,
  resetGame,
  updatePlayer,
  getPlayers,
} from "../actions/playerActions";

// * symbol turns function into generator, allowing multiple return values.
// code adapted from JavaScript Generators info. available at:
// https://javascript.info/generators
export function* handlePlayerCommands(appSocket) {
  const socket = appSocket;

  yield takeEvery(submitPlayer, (player) => {
    socket.emit("ADDING_PLAYER", player.payload);
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


}
