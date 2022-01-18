import { createAction } from "@reduxjs/toolkit";

export const selectRoomCard = createAction("SELECT_CURRENT_ROOM");
export const getRoomCards = createAction("GET_CURRENT_ROOM");
export const submitRoomCards = createAction("SUBMIT_ROOM_CARDS");
