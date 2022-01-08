import { createSlice } from "@reduxjs/toolkit";

/*Slice contains 3 arrays; 
1: contain all unused player cards
2: Current cards used by players
3 contains all discarded cards.
*/

// Holds all card values.
let PLAYER_CARD_VALUES = [1, 5, 10, 20, 25, 30, 40, 50, 80];

let PLAYER_CARD_COUNT = [7, 10, 14, 13, 11, 7, 5, 4, 2];

let PLAYER_CARDS = [];

let CURRENT_CARDS = [];

let DISCARDED_CARDS = [];

let PLAYER_1 = [];
let PLAYER_2 = [];
let PLAYER_3 = [];
let PLAYER_4 = [];

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
      clicked: false,
    };
    cardDeckSize++;
  }
}

function moveCardBetweenDecks(card, beforeDeck, afterDeck) {
  afterDeck.push(card);
  // var cardIdx = beforeDeck.indexOf(card);
  beforeDeck.splice(beforeDeck.indexOf(card));
}

// function removeCardFromDeck(card, deck) {
//   console.log('removing card from deck ' + deck + '...')
//   deck.filter(item => item.id != card.id)

// }

let SHUFFLED_DECK = PLAYER_CARDS.sort(() => 0.5 - Math.random());

const initialPlayerCardsState = {
  unusedCards: SHUFFLED_DECK,
  discardedCards: DISCARDED_CARDS,
  playerHands: {
    player1: PLAYER_1,
    player2: PLAYER_2,
    player3: PLAYER_3,
    player4: PLAYER_4,
  },
};

const playerDeckSlice = createSlice({
  name: "playerDeck",
  initialState: initialPlayerCardsState,
  reducers: {
    // Get full deck of cards from state.
    getFullDeck(state) {
      console.log(state.unusedCards.length);
    },
    setUpHands(state) {
      state.playerHands.player1 = state.unusedCards.splice(
        state.unusedCards.length - 7
      );
    },

    // If card clicked, change value on component to true. Change all other
    // card values to false.
    cardClicked(state, action) {
      state.playerHands.player1 = state.playerHands.player1.map((card) =>
        card.id === action.payload.id
          ? { ...card, clicked: true }
          : { ...card, clicked: false }
      );
    },
    // Replace card played in round by end card in unused array.
    dealNewCard(state, action) {
      state.playerHands.player1 = state.playerHands.player1.map((card) =>
        card.id === action.payload.id
          ? state.unusedCards[state.unusedCards.length - 1]
          : card
      );

      //Remove card given to player from unused deck.
      state.unusedCards.pop();

      // Append played card into discard deck.
      state.discardedCards.push(action.payload);

      console.log("final lengths:");
      console.log("unused: " + state.unusedCards.length);
      console.log("discarded:" + state.discardedCards.length);
    },
  },
});

export const playerDeckActions = playerDeckSlice.actions;

export default playerDeckSlice.reducer;
