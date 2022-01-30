import { Grid, Paper, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import Player from "../player/Player";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() =>
  createStyles({
    playerHeader: {
      fontWeight: "20 !important",
      fontSize: "30px !important",
    },
  })
);

// Holds all team players participating within game.
const PlayerTeamWindow = () => {
  const classes = useStyles();
  const players = useSelector((state) => state.allPlayers.players);

  return (
    <Grid container spacing={1} item xs={12} sm={12} md={12}>
      <Grid item xs={12} style={{ padding: "0 2px" }}>
        <header>
          <Paper>
            <h1 className={classes.playerHeader}>Turn Order</h1>
          </Paper>
        </header>
      </Grid>

      {players.map((player) => {
        return (
          <Grid item xs={12} key={player.key}>
            <Player player={player} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PlayerTeamWindow;
