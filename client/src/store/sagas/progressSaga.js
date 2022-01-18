import { takeEvery } from "redux-saga/effects";
import {
  increaseProgress, resetProgress

} from "../actions/progressActions";

// * symbol turns function into generator, allowing multiple return values.
// code adapted from JavaScript Generators info. available at:
// https://javascript.info/generators
export function* handleProgressCommands(appSocket) {
  const socket = appSocket;


  yield takeEvery(increaseProgress, (value) => {
    console.log("adding progress...", parseInt(value.payload.value));
    socket.emit("INCREASING_PROGRESS", parseInt(value.payload.value));
  });

  yield takeEvery(resetProgress, () => {
    console.log("resetting progress...");
    socket.emit("RESETTING_PROGRESS");
  });

}