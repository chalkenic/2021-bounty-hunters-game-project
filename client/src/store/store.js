import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import React from "react";
import progressBarReducer from "./slices/progressBar-slice";
import playerDeckReducer from "./slices/playerCardDeck-slice";
import pyramidDeckReducer from "./slices/roomDeck_Pyramid-slice";
import gamePlayersReducer from "./slices/gamePlayers-slice";
import playerSocket from "./sockets/playerSockets";
import { handleCommands } from "./sagas/playerSaga";

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

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,

  devTools: process.env.NODE_ENV !== "production",
  middleware: [sagaMiddleware],
});

const playerSockets = playerSocket(store.dispatch);
sagaMiddleware.run(handleCommands, playerSockets);

export default store;
