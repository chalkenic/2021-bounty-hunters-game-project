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
      console.log("test", action.payload.players);
      for (let i = 0; i < action.payload.players.length; i++) {
        let cardPlayedRecord = `Played card value ${action.payload.cardValues[i]}`;
        let lostEnergyRecord = "";
        state.gameHistory[state.gameHistory.length] = {
          player: action.payload.players[i].name,
          log: cardPlayedRecord,
        };

        if (action.payload.players[i].receivedDamage) {
          lostEnergyRecord = `Lost ${action.payload.damage} energy`;
          state.gameHistory[state.gameHistory.length] = {
            player: action.payload.players[i].name,
            log: lostEnergyRecord,
          };
        }
        let increasedProgressRecord = `Increased bar progress to ${action.payload.progress}`;

        state.gameHistory[state.gameHistory.length] = {
          player: action.payload.players[i].name,
          log: increasedProgressRecord,
        };
        // state.history = state.history[
        //   state.history.length
        // ] = `Player ${action.payload.players[i].name}: played card value ${action.payload.players[i].chosenCardValue}`;
      }

      // console.log("new history:", state.history);
    },

    resetRecords(state) {
      state.gameHistory = [];
    },
  },
});

export const historyActions = gameHistorySlice.actions;

export default gameHistorySlice.reducer;
