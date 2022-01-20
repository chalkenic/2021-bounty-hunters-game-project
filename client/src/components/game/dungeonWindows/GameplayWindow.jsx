import React from "react";
import {
  Grid,
  Paper,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import DungeonCard from "../cards/DungeonCard";
import { useSelector } from "react-redux";
import ScoreTracker from "../gameTracking/ScoreTracker";
import CardDamageTracker from "../gameTracking/CardDamageTracker";
import CardTargetTracker from "../gameTracking/CardTargetTracker";
import CardScoreTracker from "../gameTracking/CardScoreTracker";
import GamePlayLog from "../gameTracking/GamePlayLog";

const useStyles = makeStyles(() =>
  createStyles({
    border: {
      border: "1px solid white",
      marginBottom: "5px",
    },
    gameLog: {
      maxHeight: 400,
    },
  })
);

const GameTrackingWindow = () => {
  const classes = useStyles();
  const currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );
  return (
    <>
      <Grid container spacing={1} style={{ width: "100%", minHeight: 450 }}>
        <Grid item xs={4}>
          <Paper>
            <h3>Room Card</h3>
            <DungeonCard card={currentRoomCard} />
          </Paper>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Paper className={classes.gameLog}>
            <h3>Game log</h3>
            <GamePlayLog />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default GameTrackingWindow;
