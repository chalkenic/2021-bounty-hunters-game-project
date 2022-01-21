import { createSlice } from "@reduxjs/toolkit";

// const progress = { value: 0, max: 200 };

//Slice handles state of progress bar value for parsing back progress of game round.
const progressBarSlice = createSlice({
  name: "progressBar",
  initialState: { value: 0, max: 200 },
  reducers: {
    // Reducer increases game progress by card value given.
    setProgress(state, action) {
      state.value = action.payload;
    },

    setProgressMax(state, action) {
      state.max = action.payload
    },

    // Reducer decreases game progress by card value given.
    decreaseProgress(state, action) {
      state.value = state.value - action.payload;
    },
    // Reset progress to 0 on round finishing.
    resetProgress(state) {
      state.value = 0;
    },
  },
});

export const progressBarActions = progressBarSlice.actions;

export default progressBarSlice.reducer;
