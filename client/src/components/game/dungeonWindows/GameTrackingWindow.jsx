import { Card, Grid, Paper, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import PlayerDeck from "../cards/PlayerDeck";
import TutorialModal from "../tutorial/TutorialModal";
import { useSelector } from "react-redux";
import ScoreTracker from "../gameTracking/ScoreTracker";
import CardDamageTracker from "../gameTracking/CardDamageTracker";
import CardTargetTracker from "../gameTracking/CardTargetTracker";
import CardScoreTracker from "../gameTracking/CardScoreTracker";

const useStyles = makeStyles(() =>
  createStyles({
    border: {
      border: "1px solid white",
      marginBottom: "5px",
    },
  })
);

const CardDeckWindow = () => {
  // const classes = useStyles();
  const currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );

  return (
    <Paper style={{ width: "100%" }}>
      {/* <Grid item xs={11} alignContent="center"> */}
      <Paper>
        <ScoreTracker />
      </Paper>
      <Paper>
        <CardDamageTracker roomCard={currentRoomCard}></CardDamageTracker>
      </Paper>
      <Paper>
        <CardTargetTracker roomCard={currentRoomCard}></CardTargetTracker>
      </Paper>
      {/* </Grid> */}
      <Paper>
        <CardScoreTracker roomCard={currentRoomCard}></CardScoreTracker>
      </Paper>
      <Card xs={11}>
        <TutorialModal />
      </Card>
    </Paper>
  );
};
export default CardDeckWindow;
