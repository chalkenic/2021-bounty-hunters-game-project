import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const CardTargetTracker = (props) => {
  const players = useSelector((state) => state.allPlayers.players);
  let targets = "";
  try {
    targets = props.roomCard.target;
  } catch (error) {
    targets = ["1"];
  }

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
        <Typography style={{ fontStyle: "italic" }}>
          Single Player Game
        </Typography>
      )}
    </Grid>
  );
};
export default CardTargetTracker;
