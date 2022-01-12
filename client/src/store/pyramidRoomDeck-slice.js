import { createSlice } from "@reduxjs/toolkit";
import getStoredState from "redux-persist/es/getStoredState";
import { getRandomInt } from "../components/helpers/gameHelpers";

let PYRAMID_DECK_CARD_DATA = [
  { name: "deadEnd", target: [0, 1] },
  { name: "gas", target: [0, 1] },
  { name: "lowCeiling", target: [0, 1] },
  { name: "mud", target: [0, 1] },
  { name: "pits", target: [0, 1] },
  { name: "sand", target: [0, 1] },
  { name: "sarcophagus", target: [0, 1] },
  { name: "spears", target: [0, 1] },
  { name: "spikes", target: [0, 1] },
  { name: "treasure", target: [0, 1] },

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
let CURRENT_CARD = {};
let DISCARDED_CARDS = [];

// Mozilla basic function to return random number. available at:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }
// Loop creates all pyramid room cards for access via game for creation of card components.
for (let card = 0; card < 10; card++) {
  PYRAMID_DECK_CARDS[card] = {
    id: `${PYRAMID_DECK_CARD_DATA[card]}`,
    key: `p-${PYRAMID_DECK_CARD_DATA[card].name}`,
    name: `Pyramid Card ` + PYRAMID_DECK_CARD_DATA[card].name,
    src: "pyramidRoomCard_" + PYRAMID_DECK_CARD_DATA[card].name,
    windowText: PYRAMID_DECK_CARD_DATA[card].name,
    health: getRandomInt(100, 200),
    score: getRandomInt(1, 5),
    damage: getRandomInt(5, 15),
    target: PYRAMID_DECK_CARD_DATA[card].target,
    hitChance: getRandomInt(30, 70),
    completed: false,
    current: false,
  };
}

let SHUFFLED_DECK = PYRAMID_DECK_CARDS.sort(() => 0.5 - Math.random());

const initialPyramidState = {
  dungeonDeck: SHUFFLED_DECK,
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

    // endRound(state, action) {
    //   if (action.payload < state.currentCard.health) {
    //     return true;
    //   }
    // },

    dealRoomCard(state) {
      console.log("new card!");
      state.currentCard = state.dungeonDeck[state.dungeonDeck.length - 1];

      state.dungeonDeck.pop();
    },

    completeRoom(state, action) {
      state.discardedCards.push(state.currentCard);
      state.dealRoomCard();

      // //Remove card given to player from unused deck.
      // state.dungeonDeck.pop();

      // // Append played card into discard deck.
      // state.discardedCards.push(action.payload);
    },

    getCurrentDungeonCard(state) {
      let currentCard = state.dungeonDeck.find((card) =>
        card.current === true ? { card } : {}
      );
      return currentCard;
    },
  },
});

export const pyramidDeckActions = pyramidDeckSlice.actions;

export default pyramidDeckSlice.reducer;
