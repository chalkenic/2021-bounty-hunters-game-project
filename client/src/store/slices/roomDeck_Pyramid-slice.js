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
    dealRoomCard(state) {
      state.currentCard = state.dungeonDeck[state.dungeonDeck.length - 1];

      state.dungeonDeck.pop();
    },
    setCurrentCard(state, action) {
      state.currentCard = action.payload;
    },

    setGameDeck(state, action) {
      state.dungeonDeck = action.payload;
    },
    completeRoom(state, action) {
      state.discardedCards.push(state.currentCard);
      state.dealRoomCard();
    },
  },
});

export const roomDeckPyramidActions = roomDeckPyramid.actions;

export default roomDeckPyramid.reducer;
