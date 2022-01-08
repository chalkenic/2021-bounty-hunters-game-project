import { createSlice } from "@reduxjs/toolkit";

let PYRAMID_DECK_CARD_DATA = [
  { name: "deadEnd", target: [0, 1], hitChance: 50 },
  { name: "gas", target: [0, 1], hitChance: 50 },
  { name: "lowCeiling", target: [0, 1], hitChance: 50 },
  { name: "mud", target: [0, 1], hitChance: 50 },
  { name: "pits", target: [0, 1], hitChance: 50 },
  { name: "sand", target: [0, 1], hitChance: 50 },
  { name: "sarcophagus", target: [0, 1], hitChance: 50 },
  { name: "spears", target: [0, 1], hitChance: 50 },
  { name: "spikes", target: [0, 1], hitChance: 50 },
  { name: "treasure", target: [0, 1], hitChance: 50 },

  "deadEnd",
  "gas",
  "lowCeiling",
  "mud",
  "pits",
  "sand",
  "sarcophagus",
  "spears",
  "spikes",
  "treasure",
];
let PYRAMID_DECK_CARDS = [];
let CURRENT_CARD = [];
let DISCARDED_CARDS = [];

// Mozilla basic function to return random number. available at:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// Loop creates all pyramid room cards for access via game for creation of card components.
for (let card = 0; card < 10; card++) {
  PYRAMID_DECK_CARDS[card] = {
    id: `${PYRAMID_DECK_CARD_DATA[card]}`,
    key: `p-${PYRAMID_DECK_CARD_DATA[card].name}`,
    name: `Pyramid Card ` + PYRAMID_DECK_CARD_DATA[card].name,
    src: "pyramidRoomDeck_" + PYRAMID_DECK_CARD_DATA[card].name,
    health: getRandomInt(100, 200),
    score: getRandomInt(1, 5),
    target: PYRAMID_DECK_CARD_DATA[card].target,
    hitChance: PYRAMID_DECK_CARD_DATA[card].hitChance,
    completed: false,
  };
}

let SHUFFLED_DECK = PYRAMID_DECK_CARDS.sort(() => 0.5 - Math.random());

const initialPyramidState = {
  unusedCards: SHUFFLED_DECK,
  currentCard: CURRENT_CARD,
  discardedCards: DISCARDED_CARDS,
  deckSize: SHUFFLED_DECK.length,
};

const pyramidDeckSlice = createSlice({
  name: "pyramidRoomDeck",
  initialState: initialPyramidState,
  reducers: {
    getDeckCompletionStatus(state) {
      return state.discardedCards.length + 1;
    },
    getDeckSize(state) {
      return state.deckSize;
    },

    dealInitialRoomCard(state) {
      state.currentCard = state.unusedCards.splice(
        state.unusedCards.length - 1
      );
    },

    completedRoom(state, action) {
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

export const pyramidDeckActions = pyramidDeckSlice.actions;

export default pyramidDeckSlice.reducer;
