import { Card, Paper } from "@material-ui/core";
import React from "react";
import PlayerDeck from "../../cards/PlayerDeck";

const CardDeckWindow = (props) => {

  let playerDeck = new Map();

  
  return (
    <Paper style={{ height: "100%", width: "100%" }}>
      <Card xs={12}>Dungeon Deck</Card>
      <PlayerDeck/>
    </Paper>
  );
};
export default CardDeckWindow;
