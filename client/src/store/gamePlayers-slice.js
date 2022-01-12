import { createSlice } from "@reduxjs/toolkit";

const gamePlayersSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
  },
  reducers: {
    addPlayersToGame(state, action) {
      for (let index = 0; index < action.payload.length; index++) {
        state.players.push({
          id: action.payload[index].id,
          name: action.payload[index].name,
          src: "playerCard_back",
          alt: "player card",
          score: 0,
          energy: 100,
        });
      }
    },

    addScoreToPlayer(state, action) {
      state.players = state.players.map((player) =>
        player.id === action.payload.id
          ? { ...player, score: player.score + action.payload.score }
          : { ...player }
      );
    },

    reducePlayerEnergy(state, action) {
      state.players = state.players.map((player) =>
        player.id === action.payload.id
          ? { ...player, energy: player.energy - action.payload.damage }
          : { ...player }
      );
    },

    roundCardChosen(state, action) {
      state.players = state.players.map((player) =>
        player.id === action.payload.id
          ? { ...player, src: "playerCardBackChosen" }
          : { ...player }
      );
    },

    getPlayers(state) {
      return state.players;
    },
  },
});

export const gamePlayerActions = gamePlayersSlice.actions;

export default gamePlayersSlice.reducer;
