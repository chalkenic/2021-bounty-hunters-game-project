import { createSlice } from "@reduxjs/toolkit";
import { getRandomInt } from "../../components/helpers/gameHelpers";
import { generatePyramidDeck } from "../../components/helpers/deckHelpers";
import { ListItemText } from "@material-ui/core";

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
    // getDeckCompletionStatus(state) {
    //   return state.discardedCards.length + 1;
    // },
    // getDeckSize(state) {
    //   return state.deckSize;
    // },

    generateNewDeck(state) {
      console.log("wadq asfasfeEAFAFAFFAEWFEFE");
      state.dungeonDeck = generatePyramidDeck();
      console.log("new deck:", state.dungeonDeck);
      state.initialized = true;
    },

    resetGame(state) {
      state.initialized = false;
    },

    // InitializeDeck(state) {
    //   state.initialized = true;
    // },

    resetDeck(state) {
      if (!state.dungeonDeck === undefined) {
        state.dungeonDeck = state.dungeonDeck.length = 0;
      }
      if (!state.currentCard === undefined) {
        state.currentCard = state.currentCard.length = 0;
      }
      state.initialized = false;
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
    setCurrentCard(state, action) {
      state.currentCard = action.payload;
    },

    setGameDeck(state, action) {
      console.log("10. payload:", action);
      console.log("10.5. payload inside:", action.payload);

      state.dungeonDeck = action.payload;

      console.log("11: new dungeon deck:", state.dungeonDeck);
      console.log(
        "12. new current card ",
        state.dungeonDeck[state.dungeonDeck.length - 1]
      );
      // state.currentCard = state.dungeonDeck.pop()

      // state.dungeonDeck.pop();
      console.log("13. refined deck: ", state.dungeonDeck);
      console.log("14. current card set:", state.currentCard);
    },
    completeRoom(state, action) {
      state.discardedCards.push(state.currentCard);
      state.dealRoomCard();

      // //Remove card given to player from unused deck.
      // state.dungeonDeck.pop();

      // // Append played card into discard deck.
      // state.discardedCards.push(action.payload);
    },

    // getCurrentDungeonCard(state) {
    //   let currentCard = state.dungeonDeck.find((card) =>
    //     card.current === true ? { card } : {}
    //   );
    //   return currentCard;
    // },
  },
});

export const getRoomCardState = (id) => {
  return async (dispatch, getState) => {
    const currentState = getState().pyramidRoomDeck;
    console.log(currentState);
  };
};

export const roomDeckPyramidActions = roomDeckPyramid.actions;

export default roomDeckPyramid.reducer;
