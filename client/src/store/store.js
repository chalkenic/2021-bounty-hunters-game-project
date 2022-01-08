import { configureStore } from "@reduxjs/toolkit";

import progressBarReducer from "./progressBar-slice";
import playerDeckReducer from "./playerCardDeck-slice";
import pyramidDeckReducer from "./pyramidRoomDeck-slice";
import gamePlayersReducer from './gamePlayers-slice';

const store = configureStore({
  reducer: {
    progressBar: progressBarReducer,
    playerDeck: playerDeckReducer,
    pyramidRoomDeck: pyramidDeckReducer,
    gamePlayers: gamePlayersReducer
  },
  devTools: true,
});

export default store;
