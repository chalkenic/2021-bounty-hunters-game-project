import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import ErrorModal from "../tutorial/ErrorModal";
import { useState } from "react";

// Tracks which targets room card is targeting.
const CardTargetTracker = (props) => {
  const players = useSelector((state) => state.allPlayers.players);

  const [valueError, setValueError] = useState(false);

  const handleValueErrorClose = () => {
    setValueError(false);
  };

  let targets = "";
  try {
    // If target error occurs, target will always be player at turn 1.
    targets = props.roomCard.target;
  } catch (error) {
    targets = ["1"];
  }
  try {
    return (
      <Grid item style={{ paddingTop: 40 }}>
        <Typography variant="h6">Card Target(s)</Typography>

        {players.length > 1 ? (
          <>
            {targets.map((target) => {
              var playerTarget = parseInt(target);
              return (
                <Typography style={{ fontStyle: "italic" }} key={target}>
                  Player {playerTarget + 1}
                </Typography>
              );
            })}
          </>
        ) : (
          // Player informed if single player game.
          <Typography style={{ fontStyle: "italic" }}>
            Single Player Game
          </Typography>
        )}
      </Grid>
    );
  } catch {
    return (
      <ErrorModal open={valueError} handleClose={handleValueErrorClose}>
        An error occurred when attempting to load players. Please reset the
        game.
      </ErrorModal>
    );
  }
};
export default CardTargetTracker;
