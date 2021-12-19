import { configureStore } from "@reduxjs/toolkit";

import progressBarReducer from "./progressBar-slice";
import playerDeckReducer from './playerDeck-slice'

const store = configureStore({
  reducer: { progressBar: progressBarReducer, playerDeck: playerDeckReducer },
  devTools: true,
});

export default store;
