import { createSlice } from "@reduxjs/toolkit";

// Slice for holding all current players in game,
// in order to broadcast global state updates for all to see.
const allPlayersSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
    turnEnded: false,
  },
  reducers: {
    // add one or more players to the state.
    addPlayersToGame(state, action) {
      console.log("am i adding a player?");
      state.players = action.payload;
    },

    // Remove all players from state.
    resetPlayers(state) {
      state.players.length = 0;
      state.turnEnded = false;
      console.log("reset players to ", state.players);
    },

    // Reset all players images on game to original card image.
    resetTurn(state) {
      for (let p = 0; p < state.players.length; p++) {
        state.players[p].src = "playerCard_back";
      }
    },

    // Update all players with new values as determined by ending turn.
    updatePlayers(state, action) {
      state.players = action.payload;
    },

    // Change player list image to indicate card chosen.
    playerChosenCard(state, action) {
      state.players = state.players.map((player) =>
        player.id === action.payload
          ? { ...player, src: `playerCard_backChosen` }
          : { ...player }
      );
    },

    filterDuplicates(state) {
      state.players = [...new Set(state.players)];
    },
  },
});

export const allPlayerActions = allPlayersSlice.actions;

export default allPlayersSlice.reducer;
