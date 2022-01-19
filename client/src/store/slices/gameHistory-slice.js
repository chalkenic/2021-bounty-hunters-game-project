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
        let cardPlayedRecord = `Player ${action.payload.players[i].name}: played card value ${action.payload.cardValues[i]}`;
        let lostEnergyRecord = "";
        state.gameHistory[state.gameHistory.length] = cardPlayedRecord;

        if (action.payload.players[i].receivedDamage) {
          lostEnergyRecord = `Player ${action.payload.players[i].name}: lost ${action.payload.damage} energy`;
          state.gameHistory[state.gameHistory.length] = lostEnergyRecord;
        }
        let increasedProgressRecord = `Player ${action.payload.players[i].name}: increases bar progress to ${action.payload.progress}`;

        state.gameHistory[state.gameHistory.length] = increasedProgressRecord;
        // state.history = state.history[
        //   state.history.length
        // ] = `Player ${action.payload.players[i].name}: played card value ${action.payload.players[i].chosenCardValue}`;
      }

      for (let index = 0; index < state.gameHistory.length; index++) {
        console.log(state.gameHistory[index]);
      }

      // console.log("new history:", state.history);
    },

    addLostEnergyRecord(state, action) {
      state.history.push(`Player" ${action.payload.name}: " lost energy.`);
    },

    addRoundEndedRecord(state, action) {
      state.history.push(
        `Player ${action.payload.name}: Ends the round, scores ${action.payload.score} points!`
      );
    },

    addProgressIncreasedRecord(state, action) {
      state.history.push(`Progress bar has increased to ${action.payload}}`);
    },

    resetRecords(state) {
      state.gameHistory = [];
    },
  },
});

export const historyActions = gameHistorySlice.actions;

export default gameHistorySlice.reducer;
