import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import progressBarReducer from "./slices/progressBar-slice";
import playerDeckReducer from "./slices/playerCardDeck-slice";
import pyramidDeckReducer from "./slices/roomDeck_Pyramid-slice";
import gamePlayersReducer from "./slices/gamePlayers-slice";
import gameSocket from "./sockets/gameSockets";
import { handlePlayerCommands } from "./sagas/playerSaga";
import { handleProgressCommands } from "./sagas/progressSaga";
import currentPlayerReducer from "./slices/currentPlayer-slice";
import { handleRoomDeckCommands } from "./sagas/roomDeckSaga";

// code adapted from Redux toolkit.js usage guide: available at:
// https://redux-toolkit.js.org/usage/usage-guide

const appReducer = combineReducers({
  progressBar: progressBarReducer,
  playerDeck: playerDeckReducer,
  pyramidRoomDeck: pyramidDeckReducer,
  gamePlayers: gamePlayersReducer,
  currentPlayer: currentPlayerReducer
});

const persistConfig = {
  key: "root",
  storage,
};


const persistedReducer = persistReducer(persistConfig, appReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,

  devTools: process.env.NODE_ENV !== "production",
  middleware: [sagaMiddleware],
});

const socket = gameSocket(store.dispatch);
sagaMiddleware.run(handlePlayerCommands, socket);
sagaMiddleware.run(handleProgressCommands, socket);
sagaMiddleware.run(handleRoomDeckCommands, socket);

export default store;
