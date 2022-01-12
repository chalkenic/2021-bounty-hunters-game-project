import { createAction } from "@reduxjs/toolkit";

export const testAction = createAction('TEST_ACTION');
export const submitPlayer = createAction('NEW_PLAYER');
export const resetPlayers = createAction('EMPTY_PLAYER_LIST');