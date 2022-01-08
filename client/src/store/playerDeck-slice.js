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
  currentCards: CURRENT_CARDS,
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
    getFullDeck(state, action) {
      console.log(state.unusedCards.length);
    },
    setUpHands(state, action) {
      console.log(
        "do i get here? player hand size: " + state.playerHands.length
      );

      state.playerHands.player1 = state.unusedCards.splice(
        state.unusedCards.length - 7
      );
      state.currentCards.push(...state.playerHands.player1);
      for (let index = 0; index < state.playerHands.length; index++) {
        console.log("1");
        console.log(state.playerHands[index]);
      }
    },

    // getNewHand(state, action) {
    //   console.log("got to get new hand state!");
    // },

    // let tempDeck = state.unusedCards.slice(gameDeck.length - 7);

    dealCard(state, action) {
      console.log("got to deal card state! payload: " + action.payload);
      state.unusedCards.forEach((card) => {
        if (card.id === action.payload) {
          console.log("found a match! (" + card.id + " & " + action.payload);
          console.log("adding card to current card deck: " + card.id);
          // state.currentCards.push(card);
          console.log("removing card to unused card deck: " + card.id);
          // var cardIdx = state.unusedCards.indexOf(card);
          // state.unusedCards.splice(cardIdx);

          moveCardBetweenDecks(card, state.unusedCards, state.currentCards);
        }
      });

      console.log("final lengths:");
      console.log("unused: " + state.unusedCards.length);
      console.log("current: " + state.currentCards.length);
      console.log("discarded:" + state.discardedCards.length);
    },

    cardClicked(state, action) {
      state.playerHands.player1 = state.playerHands.player1.map((card) =>
        card.id === action.payload.id
          ? { ...card, clicked: true }
          : { ...card, clicked: false }
      );
    },

    dealNewCard(state, action) {
      state.playerHands.player1 = state.playerHands.player1.map((card) =>
      card.id === action.payload.id
        ? state.unusedCards[state.unusedCards.length - 1]
        : card
    );

      state.unusedCards.pop()

      state.discardedCards.push(action.payload);

      console.log("final lengths:");
      console.log("unused: " + state.unusedCards.length);
      console.log("discarded:" + state.discardedCards.length);
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

export const playerDeckActions = playerDeckSlice.actions;

export default playerDeckSlice.reducer;


