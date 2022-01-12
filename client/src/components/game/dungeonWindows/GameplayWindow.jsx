import React from "react";
import { Grid, Paper } from "@material-ui/core";
import DungeonCard from "../cards/DungeonCard";
import { pyramidDeckActions } from "../../../store/pyramidRoomDeck-slice";
import { useSelector } from "react-redux";

const GameplayWindow = (props) => {
  const currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );
  return (
    <>
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={2} style={{ padding: "0 5px" }}>
          <Paper>Turn order</Paper>
        </Grid>
        <Grid item xs={4} style={{ padding: "0 5px" }}>
          <Paper>
            Dungeon <i className="mdi mdi-card-bulleted-off:"></i>
            <DungeonCard card={currentRoomCard} />
            <p>
              {currentRoomCard.hitChance}% chance of {currentRoomCard.damage}{" "}
              energy loss
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ padding: "0 5px" }}>
          <Paper>game log</Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default GameplayWindow;
