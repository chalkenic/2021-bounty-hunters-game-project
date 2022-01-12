import React from "react";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import progressBarReducer from "./progressBar-slice";
import playerDeckReducer from "./playerCardDeck-slice";
import pyramidDeckReducer from "./pyramidRoomDeck-slice";
import gamePlayersReducer from "./gamePlayers-slice";

const appReducer = combineReducers({
  progressBar: progressBarReducer,
  playerDeck: playerDeckReducer,
  pyramidRoomDeck: pyramidDeckReducer,
  gamePlayers: gamePlayersReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
