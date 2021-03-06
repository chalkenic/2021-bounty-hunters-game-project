import { createSlice } from "@reduxjs/toolkit";

var gameHistory = [];

const initialHistoryState = {
  gameHistory: gameHistory,
};

const gameHistorySlice = createSlice({
  name: "history",
  initialState: initialHistoryState,
  reducers: {
    addTurnDetailsRecord(state, action) {
      for (let i = 0; i < action.payload.players.length; i++) {
        let cardPlayedRecord = `Played card value ${action.payload.cardValues[i]}`;
        let lostEnergyRecord = "";
        let increasedProgressRecord = "";
        state.gameHistory[state.gameHistory.length] = {
          player: action.payload.players[i].name,
          log: cardPlayedRecord,
        };

        if (action.payload.players[i].receivedDamage) {
          let originalEnergy =
            action.payload.players[i].energy + action.payload.card.damage;
          lostEnergyRecord = `Lost ${action.payload.card.damage} energy (${originalEnergy} -> ${action.payload.players[i].energy})`;
          state.gameHistory[state.gameHistory.length] = {
            player: action.payload.players[i].name,
            log: lostEnergyRecord,
          };
        }

        if (
          action.payload.progress >= action.payload.card.health ||
          action.payload.progress === 0
        ) {
          increasedProgressRecord = `Won round! Scored ${action.payload.card.score} points.`;
        } else {
          increasedProgressRecord = `Increased bar progress to ${action.payload.progress}`;
        }

        state.gameHistory[state.gameHistory.length] = {
          player: action.payload.players[i].name,
          log: increasedProgressRecord,
        };
      }
    },

    resetRecords(state) {
      state.gameHistory = [];
    },
  },
});

export const historyActions = gameHistorySlice.actions;

export default gameHistorySlice.reducer;
