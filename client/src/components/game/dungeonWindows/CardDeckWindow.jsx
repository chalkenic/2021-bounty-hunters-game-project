import { Card, Paper } from "@material-ui/core";
import React from "react";
import PlayerDeck from "../cards/PlayerDeck";
import TutorialModal from '../tutorial/TutorialModal'

const CardDeckWindow = (props) => {
  let playerDeck = new Map();

  return (
    <Paper style={{ height: "100%", width: "100%" }}>
      <Card xs={12}>Dungeon Deck</Card>
      <Card xs={11}><TutorialModal /></Card>
      <PlayerDeck />
      
    </Paper>
  );
};
export default CardDeckWindow;
