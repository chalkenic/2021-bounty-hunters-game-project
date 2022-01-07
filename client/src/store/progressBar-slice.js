import { createSlice } from "@reduxjs/toolkit";


const InitialProgressBarState = { progress: 0 };

//Slice handles state of progress bar value for parsing back progress of game round.
const progressBarSlice = createSlice({
  name: "progressBar",
  initialState: InitialProgressBarState,
  reducers: {
    // Reducer increases game progress by card value given.
    increaseProgress(state, action) {
      state.progress = state.progress + action.payload;
    },

    increaseProgressComp(state, action) {
      console.log('test2');
      state.progress = state.progress + parseInt(action.payload.card.value);
    },
    // Reducer decreases game progress by card value given.
    decreaseProgress(state, action) {
      state.progress = state.progress - action.payload;
    },
    // Reset progress to 0 on round finishing.
    resetProgress(state) {
      state.progress = 0;
    },
  },
});

export const progressBarActions = progressBarSlice.actions;

export default progressBarSlice.reducer;
