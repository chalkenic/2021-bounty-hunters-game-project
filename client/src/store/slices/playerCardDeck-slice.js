import { createSlice } from "@reduxjs/toolkit";
import { generatePlayerDeck } from "../../components/helpers/deckHelpers";

let DISCARDED_CARDS = [];
let PLAYER_CARDS = generatePlayerDeck();

const initialPlayerCardsState = {
  playerCards: PLAYER_CARDS,
  discardedCards: DISCARDED_CARDS,
  initialized: true,
  playerHand: [],
};

const playerDeckSlice = createSlice({
  name: "playerDeck",
  initialState: initialPlayerCardsState,
  reducers: {
    // Get full deck of cards from state.
    generateNewDeck(state) {
      state.playerCards = generatePlayerDeck();
      state.initialized = true;
    },
    setUpHands(state) {
      for (let i = 0; i < 7; i++) {
        state.playerHand[i] = state.playerCards[state.playerCards.length - 1];
        state.playerCards.pop();
      }
    },

    resetHand(state) {
      state.playerHand = [];
    },

    // If card clicked, change value on component to true. Change all other
    // card values to false.
    cardClicked(state, action) {
      state.playerHand = state.playerHand.map((card) =>
        card.id === action.payload.id
          ? { ...card, clicked: true }
          : { ...card, clicked: false }
      );
    },
    // Replace card played in round by end card in unused array.
    dealNewCard(state, action) {
      state.playerHand = state.playerHand.map((card) =>
        card.id === action.payload.id
          ? state.playerCards[state.playerCards.length - 1]
          : card
      );

      //Remove card given to player from unused deck.
      state.playerCards.pop();

      // Append played card into discard deck.
      state.discardedCards.push(action.payload);

    },
  },
});

export const playerDeckActions = playerDeckSlice.actions;

export default playerDeckSlice.reducer;
