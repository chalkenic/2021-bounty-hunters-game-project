import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Player from "../player/Player";
import { gamePlayerActions } from "../../../store/gamePlayers-slice";
import { useDispatch, useSelector } from "react-redux";

// const useStyles = makeStyles(() => ({
//   playerWindow: {
//     marginLeft: 40,
//   },
// }));

let GAME_PLAYERS = [
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
  // {
  //   id: 4,
  //   playerName: "xxx4",
  //   playerNumber: 2,
  // },
];

const PlayerTeamWindow = () => {
  const dispatch = useDispatch();

  const players = useSelector((state) => state.gamePlayers.players);

  for (let index = 0; index < players.length; index++) {
    console.log('*************************');
    console.log(players[index]);
    console.log('*************************');
    
  }

  return (
    <Grid container spacing={1} item xs={12} sm={12} md={12}>
      {players.map((player) => {
        console.log(player.name)
        return (
          <Grid item xs={12} key={player.id}>
            <Player key={player.id} player={player} name={player.name} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PlayerTeamWindow;
