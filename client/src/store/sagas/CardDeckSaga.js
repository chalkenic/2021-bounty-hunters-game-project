import { takeEvery } from "redux-saga/effects";
import {
  submitRoomCards,
} from "../actions/roomDeckActions";

export function* handleCardDeckCommands(appSocket) {
  const socket = appSocket;


  yield takeEvery(submitRoomCards, (roomCards) => {
    console.log("adding room cards:", roomCards);
    socket.emit("ADDING_ROOM_CARDS", roomCards);
  });
}
