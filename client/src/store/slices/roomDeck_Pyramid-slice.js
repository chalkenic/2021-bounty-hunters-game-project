import { createSlice } from "@reduxjs/toolkit";
import { generatePyramidDeck } from "../../components/helpers/deckHelpers";

let CURRENT_CARD = {};
let DISCARDED_CARDS = [];
let SHUFFLED_DECK = generatePyramidDeck();

const initialPyramidState = {
  dungeonDeck: SHUFFLED_DECK,
  currentCard: CURRENT_CARD,
  discardedCards: DISCARDED_CARDS,
  deckSize: SHUFFLED_DECK.length,
  initialized: false,
};

const roomDeckPyramid = createSlice({
  name: "pyramidRoomDeck",
  initialState: initialPyramidState,
  reducers: {
    generateNewDeck(state) {
      state.dungeonDeck = generatePyramidDeck();
      state.initialized = true;
    },

    resetGame(state) {
      state.initialized = false;
    },

    resetDeck(state) {
      if (!state.dungeonDeck === undefined) {
        state.dungeonDeck = state.dungeonDeck.length = 0;
      }
      if (!state.currentCard === undefined) {
        state.currentCard = state.currentCard.length = 0;
      }
      state.initialized = false;
    },
    setCurrentCard(state, action) {
      state.currentCard = action.payload;
      console.log("current card before:", (state.currentCard = action.payload));
      if (state.currentCard.target.length < 2) {
        state.currentCard.target = [state.currentCard.target];
      }

      console.log("current card after:", (state.currentCard = action.payload));
    },

    setGameDeck(state, action) {
      state.dungeonDeck = action.payload;
    },
  },
});

export const roomDeckPyramidActions = roomDeckPyramid.actions;

export default roomDeckPyramid.reducer;
