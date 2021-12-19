import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Player from "./Player";

// const useStyles = makeStyles(() => ({
//   playerWindow: {
//     marginLeft: 40,
//   },
// }));

const GAME_PLAYERS = [
  {
    id: 1,
    playerName: "xxx1",
    playerNumber: Math.random(5),
  },
  {
    id: 2,
    playerName: "xxx2",
    playerNumber: Math.random(3),
  },
  {
    id: 3,
    playerName: "xxx3",
    playerNumber: 2,
  },
  {
    id: 4,
    playerName: "xxx4",
    playerNumber: 2,
  },
];

const PlayerList = () => {
  return (
    <Grid container spacing={1}>
      {GAME_PLAYERS.map((player) => {
        return (
          <Grid item xs={12} key={player.id}>
            <Player key={player.id} player={player} name={player.playerName} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PlayerList;
