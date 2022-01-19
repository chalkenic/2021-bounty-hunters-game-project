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
  })
);

const GameplayWindow = () => {
  const classes = useStyles();
  const currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );
  return (
    <>
      <Grid container spacing={1} style={{ width: "100%" }}>
        <Grid item xs={2}>
          <Paper className={classes.border}>
            <ScoreTracker />
          </Paper>
          <Paper className={classes.border}>
            <CardDamageTracker roomCard={currentRoomCard}></CardDamageTracker>
          </Paper>
          <Paper className={classes.border}>
            <CardTargetTracker roomCard={currentRoomCard}></CardTargetTracker>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <h3>Room Card</h3>
            <DungeonCard card={currentRoomCard} />
            <CardScoreTracker roomCard={currentRoomCard}></CardScoreTracker>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ padding: "0 5px" }}>
          <Paper>
            <GamePlayLog />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default GameplayWindow;
