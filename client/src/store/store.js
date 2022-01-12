import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import React from "react";
import progressBarReducer from "./progressBar-slice";
import playerDeckReducer from "./playerCardDeck-slice";
import pyramidDeckReducer from "./pyramidRoomDeck-slice";
import gamePlayersReducer from "./gamePlayers-slice";

// code adapted from Redux toolkit.js usage guide: available at:
// https://redux-toolkit.js.org/usage/usage-guide

const appReducer = combineReducers({
  progressBar: progressBarReducer,
  playerDeck: playerDeckReducer,
  pyramidRoomDeck: pyramidDeckReducer,
  gamePlayers: gamePlayersReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = (state, action) => {
  // if (action.type === "NEW_GAME") {
  //   state = undefined;
  // }
  const persistedReducer = persistReducer(
    persistConfig,
    appReducer(state, action)
  );

  return combineReducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
  reducer: persistedReducer,

  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
