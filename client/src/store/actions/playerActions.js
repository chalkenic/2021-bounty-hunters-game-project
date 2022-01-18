import { createAction } from "@reduxjs/toolkit";

export const testAction = createAction("TEST_ACTION");
export const submitPlayer = createAction("NEW_PLAYER");
export const resetGame = createAction("EMPTY_PLAYER_LIST");
export const updatePlayer = createAction("UPDATE_PLAYER");
export const getPlayers = createAction("GET_PLAYER_LIST");
