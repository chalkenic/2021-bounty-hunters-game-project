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
    valueHeader: {
      fontWeight: "20 !important",
      fontSize: "20px !important",
      paddingBottom: 10,
    },
    scoreHeader: {
      fontWeight: "600 !important",
      fontSize: "25px !important",
      paddingBottom: 10,
      paddingTop: 10,
    },
    playerHeader: {
      fontWeight: "20 !important",
      fontSize: "18px !important",
      paddingBottom: 10,
      paddingTop: 10,
    },
  })
);

// Track all player scores.
const ScoreTracker = () => {
  const classes = useStyles();
  const players = useSelector((state) => state.allPlayers.players);
  return (
    <Grid item>
      <Typography variant="h1" className={classes.scoreHeader}>
        Scores
      </Typography>
      {players.map((player) => {
        let playerName = player.name;
        if (player.name.length > 7) {
          playerName = playerName.slice(0, 7) + "...";
        }
        return (
          <Grid item xs={12} key={player.key}>
            <Typography variant="h1" className={classes.playerHeader}>{playerName}</Typography>
            <Typography variant="h1" className={classes.valueHeader}>
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
