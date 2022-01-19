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
      cardHand: [],
    },
  },
  reducers: {
    setCurrentPlayerName(state, action) {
      state.player.name = action.payload;
      // console.log("player now:", state.player);
    },

    setPlayerAsMaster(state, action) {
      state.player.master = true;
      // console.log("something 1", action.payload);
      // console.log("something 2", action.payload[0].id);
      state.player.id = action.payload[0].id;
      state.player.key = action.payload[0].key;

      // console.log("player id now:", state.player.id);
    },

    setPlayer(state, action) {
      state.player.id = action.payload[0].id;
    },

    resetPlayer(state, action) {},
  },
});

export const { setCurrentPlayerName, setPlayerAsMaster, setPlayer } =
  currentPlayerSlice.actions;

export default currentPlayerSlice.reducer;
