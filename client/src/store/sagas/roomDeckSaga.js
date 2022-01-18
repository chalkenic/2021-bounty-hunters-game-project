import { takeEvery } from "redux-saga/effects";
import { selectRoomCard, getRoomCards, submitRoomCards } from "../actions/roomDeckActions";

export function* handleRoomDeckCommands(appSocket) {
  const socket = appSocket;

  yield takeEvery(selectRoomCard, (card) => {
    socket.emit("CHOOSING_CURRENT_ROOM", card.payload);
  });

  yield takeEvery(getRoomCards, () => {
    socket.emit("GET_CURRENT_ROOM");
  });

  yield takeEvery(submitRoomCards, (roomCards) => {
    console.log("adding room cards:", roomCards);
    socket.emit("ADDING_ROOM_CARDS", roomCards);
  });
}
