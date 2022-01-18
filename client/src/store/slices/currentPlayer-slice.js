import { createSlice } from "@reduxjs/toolkit";


const currentPlayerSlice = createSlice({
  name: "players",
  initialState: {
    player: {
      id: "",
      name: undefined,
      src: "playerCard_back",
      alt: "player card",
      score: 0,
      energy: 100,
      turn: null,
      master: "",
      chosenCardValue: 0
    },
  },
  reducers: {
    setCurrentPlayerName(state, action) {
      state.player.name = action.payload;
      console.log('player now:',state.player)
    },

    setPlayerAsMaster(state) {
      state.player.master = true;
    }
  },
});

export const { setCurrentPlayerName, setPlayerAsMaster } = currentPlayerSlice.actions;

export default currentPlayerSlice.reducer;
