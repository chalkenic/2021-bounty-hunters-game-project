import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper, Typography, createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    border: {
      border: "1px solid white",
      marginBottom: "2px",
    },
  })
);

const ScoreTracker = () => {
  const classes = useStyles();
  const players = useSelector((state) => state.allPlayers.players);
  return (
    <Grid item>
      <Typography variant="h6">Scores</Typography>
      {/* <Grid container xs={12} sm={12} md={12} > */}
      {players.map((player) => {
        let playerName = player.name;
        if (player.name.length > 7) {
          playerName = playerName.slice(0, 7) + "...";
        }
        return (
          <Grid item xs={12} key={player.key}>
            <Typography variant="subtitle1">{playerName}</Typography>
            <Typography variant="h4">{player.score}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ScoreTracker;
