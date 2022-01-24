import { Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import ScoreTracker from "../gameTracking/ScoreTracker";
import CardDamageTracker from "../gameTracking/CardDamageTracker";
import CardTargetTracker from "../gameTracking/CardTargetTracker";
import CardPointsTracker from "../gameTracking/CardPointsTracker";
import RoomsLeftTracker from "../gameTracking/RoomsLeftTracker";

const CardDeckWindow = (props) => {
  const currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );

  return (
    <Paper style={{ width: "100%" }}>
      <Paper>
        <ScoreTracker />
      </Paper>
      <Paper>
        <CardDamageTracker roomCard={currentRoomCard}></CardDamageTracker>
      </Paper>
      <Paper>
        <CardTargetTracker
          roomCard={currentRoomCard}
          players={props.players}
        ></CardTargetTracker>
      </Paper>
      <Paper>
        <CardPointsTracker roomCard={currentRoomCard}></CardPointsTracker>
      </Paper>
      <Paper>
        <RoomsLeftTracker />
      </Paper>
    </Paper>
  );
};
export default CardDeckWindow;
