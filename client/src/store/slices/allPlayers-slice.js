import { createSlice } from "@reduxjs/toolkit";

const allPlayersSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
    turnEnded: false,
  },
  reducers: {
    addPlayersToGame(state, action) {
      state.players = action.payload;
      // for (let i = 0; i < action.payload.length; i++) {

      // }
    },

    // assignCardValue(state, action) {
    //   console.log(
    //     "card value payload:",
    //     action.payload,
    //     "value",
    //     action.payload.card.value
    //   );
    //   state.players = state.players.map((player) =>
    //     player.id === action.payload.id
    //       ? {
    //           ...player,
    //           chosenCardValue:
    //             player.chosenCardValue + parseInt(action.payload.card.value),
    //           turnEnded: true,
    //         }
    //       : { ...player }
    //   );
    //   console.log("all players after assignment:", state.players);
    // },

    resetPlayers(state) {
      state.players.length = 0;
      state.turnEnded = false;
      console.log("reset players to ", state.players);
    },

    resetTurn(state) {
      console.log("ending the turn innit?");
      for (let p = 0; p < state.players.length; p++) {
        state.players[p].src = "playerCard_back";
      }
      // state.players = state.players.map(
      //   (player) => (player.src = "playerCard_back")
      // );
    },

    resetPlayerTurn(state, action) {
      state.players = state.players.map((player) =>
        player.id === action.payload.id
          ? { ...player, turnHasEnded: false, chosenCardValue: 0 }
          : { ...player }
      );
    },

    addTurnToPlayer(state, action) {
      console.log(action.payload);
      console.log("id:", action.payload.id, "turn", action.payload.turn);
      state.players = state.players.map((player) =>
        player.id === action.payload.id
          ? { ...player, turn: action.payload.turn + 1 }
          : { ...player }
      );
    },

    updatePlayers(state, action) {
      state.players = action.payload;
    },

    playerChosenCard(state, action) {
      state.players = state.players.map((player) =>
        player.id === action.payload
          ? { ...player, src: `playerCard_backChosen` }
          : { ...player }
      );
    },

    assignCardPlayedValue(state, action) {
      state.players = state.players.map((player) =>
        player.id === action.payload.id
          ? {
              ...player,
              chosenCardValue: parseInt(action.payload.value),
              turnHasEnded: true,
            }
          : { ...player }
      );

      console.log(state.players);

      state.turnEnded = true;
      for (let i = 0; i < state.players.length; i++) {
        if (!state.players[i].turnHasEnded) {
          state.turnEnded = false;
        } else {
        }
      }
    },

    addScoreToPlayer(state, action) {
      state.players = state.players.map((player) =>
        player.id === action.payload.id
          ? { ...player, score: player.score + action.payload.score }
          : { ...player }
      );
    },

    reducePlayerEnergy(state, action) {
      state.players = state.players.map((player) =>
        player.id === action.payload.id
          ? { ...player, energy: player.energy - action.payload.damage }
          : { ...player }
      );
    },

    roundCardChosen(state, action) {
      console.log("data to change:", action.payload);
      state.players = state.players.map((player) =>
        player.id === action.payload
          ? { ...player, src: "playerCardBackChosen" }
          : { ...player }
      );
    },

    getPlayers(state) {
      return state.players;
    },
  },
});

export const allPlayerActions = allPlayersSlice.actions;

export default allPlayersSlice.reducer;
