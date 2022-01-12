import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper } from "@material-ui/core";

const TurnTracker = () => {
  const players = useSelector((state) => state.gamePlayers.players);
  console.log(players);
  return (
    <div>
      <>Turn Order</>
      <Grid container spacing={1} item xs={12} sm={12} md={12}>
        {players.map((player) => {
          return (
            <Grid item xs={12} key={player.key}>
              <Paper>
                {player.name}
                {player.turn}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TurnTracker;
