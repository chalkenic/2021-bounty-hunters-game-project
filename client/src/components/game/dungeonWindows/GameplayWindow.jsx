import React from "react";
import { Grid, Paper, createStyles, makeStyles } from "@material-ui/core";
import DungeonCard from "../cards/DungeonCard";
import { useSelector } from "react-redux";
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
    playerHeader: {
      fontWeight: "20 !important",
      fontSize: "30px !important",
    },
  })
);

// Hosts components containing current card data.
const GameTrackingWindow = () => {
  const classes = useStyles();
  const currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );
  return (
    <>
      <Grid container spacing={1} style={{ width: "100%", minHeight: 450 }}>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <Paper>
            <h1 className={classes.playerHeader}>Room Card</h1>
            <DungeonCard card={currentRoomCard} />
          </Paper>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Paper className={classes.gameLog}>
            <h1 className={classes.playerHeader}>Game log</h1>
            <GamePlayLog />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default GameTrackingWindow;
