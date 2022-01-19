import { takeEvery } from "redux-saga/effects";
import { increaseProgress, resetProgress } from "../actions/progressActions";

// * symbol turns function into generator, allowing multiple return values.
// code adapted from JavaScript Generators info. available at:
// https://javascript.info/generators
export function* handleProgressCommands(appSocket) {
  const socket = appSocket;

  yield takeEvery(increaseProgress, (player) => {
    socket.emit("INCREASING_PROGRESS", player.payload);
  });

  yield takeEvery(resetProgress, () => {
    socket.emit("END_TURN_BAR");
  });
}
