import { createSlice } from "@reduxjs/toolkit";

const currentPlayerSlice = createSlice({
  name: "players",
  initialState: {
    player: {
      key: undefined,
      id: "",
      name: undefined,
      src: "playerCard_back",
      alt: "player card",
      score: 0,
      energy: 100,
      turn: null,
      turnHasEnded: false,
      master: "",
      chosenCardValue: 0,
      knockedOut: false,
    },
  },
  reducers: {
    setCurrentPlayerName(state, action) {
      state.player.name = action.payload;
    },

    setPlayerAsMaster(state, action) {
      state.player.master = true;
      state.player.id = action.payload[0].id;
      state.player.key = action.payload[0].key;
    },

    setPlayer(state, action) {
      state.player.id = action.payload[0].id;
    },

    resetPlayer(state) {
      state.player.name = undefined;
    },
  },
});

export const {
  setCurrentPlayerName,
  setPlayerAsMaster,
  setPlayer,
  resetPlayer,
} = currentPlayerSlice.actions;

export default currentPlayerSlice.reducer;
