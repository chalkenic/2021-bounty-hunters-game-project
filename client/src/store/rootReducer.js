import React from "react";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import progressBarReducer from "./slices/progressBar-slice";
import playerDeckReducer from './slices/playerCardDeck-slice'
import pyramidDeckReducer from "./slices/roomDeck_Pyramid-slice";
import allPlayersReducer from "./slices/allPlayers-slice";

const appReducer = combineReducers({
  progressBar: progressBarReducer,
  playerDeck: playerDeckReducer,
  pyramidRoomDeck: pyramidDeckReducer,
  allPlayers: allPlayersReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
