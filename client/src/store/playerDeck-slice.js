import { createSlice } from "@reduxjs/toolkit";

/*Slice contains 3 arrays; 
1: contain all unused player cards
2: contain all cards currently in play
3 contains all discarded cards.
*/

let PLAYER_CARD_VALUES = [1, 5, 10, 20, 25, 30, 40, 50, 80];

let PLAYER_CARD_COUNT = [7, 9, 10, 9, 8, 10, 10, 7, 4];

let PLAYER_CARDS = [];

let CURRENT_CARDS = [];

let DISCARDED_CARDS = [];

let cardDeckSize = 0;

for (let cardTotal = 0; cardTotal < PLAYER_CARD_VALUES.length; cardTotal++) {
  console.log("card deck size: " + cardDeckSize);
  for (
    let cardCounter = 0;
    cardCounter < PLAYER_CARD_COUNT[cardTotal];
    cardCounter++
  ) {
    PLAYER_CARDS[cardDeckSize] = {
      id: `pc${PLAYER_CARD_VALUES[cardTotal]}-${cardCounter}`,
      key: `pc${PLAYER_CARD_VALUES[cardTotal]}-${cardCounter}`,
      name: "Player Card" + PLAYER_CARD_VALUES[cardTotal],
      src: "playerCard_" + PLAYER_CARD_VALUES[cardTotal],
      alt: "Player Card " + PLAYER_CARD_VALUES[cardTotal] + " image",
      count: `${PLAYER_CARD_COUNT[cardTotal]}`,
      value: `${PLAYER_CARD_VALUES[cardTotal]}`,
    };
    cardDeckSize++;
  }
}

const initialPlayerCardsState = {
  UnusedCards: PLAYER_CARDS,
  currentCards: [],
  discardedCards: [],
};

const playerDeckSlice = createSlice({
  name: "playerDeck",
  initialState: initialPlayerCardsState,
  reducers: {
    // Get full deck of cards from state.
    getFullDeck(state, action) {
      state.progress = state.progress + action.payload;
    },
    // Reducer decreases game progress by card value given.
    decreaseProgress(state, action) {
      state.progress = state.progress - action.payload;
    },
    // Reset progress to 0 on round finishing.
    resetProgress(state) {
      state.progress = 0;
    },

    // dealCardToPlayer(state, action) {

    //   PLAYER_CARDS.forEach(card => {
    //     console.log('card in deck: ' + card.id + '; card checking against: ' + action.payload.id)
    //     if(card.id === action.payload.id) {
    //       console.log('found!');
    //       initialPlayerCardsState.currentCards.push(card);
    //       initialPlayerCardsState.UnusedCards.splice(card);
    //     }
    //   });

    //   console.log('test');
    //   console.log(initialPlayerCardsState.currentCards);


    // },
  },
});

export const playerCardDeckActions = playerDeckSlice.actions;

export default playerDeckSlice.reducer;
