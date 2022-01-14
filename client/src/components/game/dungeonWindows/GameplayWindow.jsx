import React from "react";
import { Grid, Paper } from "@material-ui/core";
import DungeonCard from "../cards/DungeonCard";
import { roomDeckPyramidActions } from "../../../store/slices/roomDeck_Pyramid-slice";
import { useSelector } from "react-redux";
import TurnTracker from "../gameTracking/TurnTracker";
import ScoreTracker from "../gameTracking/ScoreTracker";

const GameplayWindow = (props) => {
  const currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );
  return (
    <>
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={2} style={{ padding: "0 2px" }}>
          <Paper>
            <Grid item xs={12}>
              <TurnTracker />
            </Grid>

            <Grid item xs={12}>
              <ScoreTracker />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4} style={{ padding: "0 5px" }}>
          <Paper>
            Dungeon
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
