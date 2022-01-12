import { createSlice } from "@reduxjs/toolkit";

const gamePlayersSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
  },
  reducers: {
    addPlayersToGame(state, action) {
      for (let i = 0; i < action.payload.length; i++) {
        state.players.push({
          id: action.payload[i].id,
          key: `player_${action.payload[i].name}`,
          name: action.payload[i].name,
          src: "playerCard_back",
          alt: "player card",
          score: 0,
          energy: 100,
          turn: null,
          socketId: null,
        });
      }
    },

    resetPlayers(state) {
      state.players.length = 0;
    },

    addTurnToPlayer(state, action) {
      console.log(action.payload);
      console.log("id:", action.payload.id, "turn", action.payload.turn);
      state.players = state.players.map((player) =>
        player.id === action.payload.id
          ? { ...player, turn: action.payload.turn + 1 }
          : { ...player }
      );
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
