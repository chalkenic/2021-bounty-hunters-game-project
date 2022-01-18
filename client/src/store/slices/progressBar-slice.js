import { createSlice } from "@reduxjs/toolkit";

const progress = { value: 0, max: 200 };

//Slice handles state of progress bar value for parsing back progress of game round.
const progressBarSlice = createSlice({
  name: "progressBar",
  initialState: progress,
  reducers: {
    // Reducer increases game progress by card value given.
    increaseProgress(state, action) {
      console.log("progress start:", state.value);
      console.log("amount to add :", action.payload);
      state.value = state.value + action.payload;
    },

    // Reducer decreases game progress by card value given.
    decreaseProgress(state, action) {
      state.value = state.value - action.payload;
    },
    // Reset progress to 0 on round finishing.
    resetProgress(state) {
      console.log("dildo");
      state.value = 0;
    },
  },
});

export const progressBarActions = progressBarSlice.actions;

export default progressBarSlice.reducer;
