import { createAction } from "@reduxjs/toolkit";

export const testAction = createAction("TEST_ACTION");
export const submitPlayer = createAction("NEW_PLAYER");
export const resetGame = createAction("EMPTY_PLAYER_LIST");
export const updatePlayer = createAction("UPDATE_PLAYER");
export const getPlayers = createAction("GET_PLAYER_LIST");
export const playerEndTurn = createAction("END_PLAYER_TURN");
export const saveLocalPlayer = createAction("SAVE_LOCAL_PLAYER");
export const requestId = createAction("REQUEST_ID");
export const addValueToPlayer = createAction("ADD_VALUE");
