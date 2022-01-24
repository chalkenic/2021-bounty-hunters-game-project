import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, createStyles, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    border: {
      border: "1px solid white",
    },
    headerSeparate: {
      borderBottom: "2px solid #fff",
      marginBottom: "1%",
      marginLeft: "12.5%",
      marginRight: "12.5%",
    },
  })
);

// Track all player scores.
const ScoreTracker = () => {
  const classes = useStyles();
  const players = useSelector((state) => state.allPlayers.players);
  return (
    <Grid item>
      <Typography variant="h4" style={{ paddingTop: 10, paddingBottom: 10 }}>
        Scores
      </Typography>
      {players.map((player) => {
        let playerName = player.name;
        if (player.name.length > 7) {
          playerName = playerName.slice(0, 7) + "...";
        }
        return (
          <Grid item xs={12} key={player.key}>
            <Typography variant="subtitle1">{playerName}</Typography>
            <Typography variant="h4" style={{ paddingBottom: 10 }}>
              {player.score}
            </Typography>
            <Divider className={classes.headerSeparate} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ScoreTracker;
