import React from "react";

const PlayerCardContext = React.createContext({
  cardChoices: [],
  player1__choice: 0,
  addPlayer__choice: (choice) => {},
});

export default PlayerCardContext;
