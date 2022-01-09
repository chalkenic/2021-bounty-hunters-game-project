import { createSlice } from "@reduxjs/toolkit";

const gamePlayersSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
  },
  reducers: {
    addPlayersToGame(state, action) {
      for (let index = 0; index < action.payload.length; index++) {
        console.log("----------------------------------------");
        console.log(action.payload[index]);
        console.log("----------------------------------------");
        state.players.push({
          id: action.payload[index].id,
          name: action.payload[index].name,
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
          ? { ...player, score: player.energy - action.payload.damage }
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
