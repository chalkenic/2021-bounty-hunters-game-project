import { createSlice } from "@reduxjs/toolkit";
import { generatePyramidDeck } from "../../components/helpers/deckHelpers";

let CURRENT_CARD = {};
let gameOver = false;
let SHUFFLED_DECK = generatePyramidDeck();

const initialPyramidState = {
  dungeonDeck: SHUFFLED_DECK,
  currentCard: CURRENT_CARD,
  deckSize: SHUFFLED_DECK.length,
  initialized: false,
  gameOver: gameOver,
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
      gameOver = false;
    },

    // reset game deck after completion.
    emptyDeck(state) {
      state.dungeonDeck = [];
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
      if (state.currentCard.target.length < 2) {
        state.currentCard.target = [state.currentCard.target];
      }
    },

    setGameDeck(state, action) {
      state.dungeonDeck = action.payload;
      state.deckSize = action.payload.length;
    },

    endGame(state, action) {
      state.roomCards = action.payload;
      state.gameOver = true;

      console.log(state.gameOver);
    },

    startGame(state) {
      state.gameOver = false;
    },
  },
});

export const roomDeckPyramidActions = roomDeckPyramid.actions;

export default roomDeckPyramid.reducer;
