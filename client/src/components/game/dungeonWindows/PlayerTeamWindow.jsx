import { Grid } from "@material-ui/core";
import React from "react";
import Player from "../player/Player";
import { gamePlayerActions } from "../../../store/gamePlayers-slice";
import { useDispatch, useSelector } from "react-redux";

const PlayerTeamWindow = () => {

  const players = useSelector((state) => state.gamePlayers.players);

  return (
    <Grid container spacing={1} item xs={12} sm={12} md={12}>
      {players.map((player) => {
        return (
          <Grid item xs={12} key={player.id}>
            <Player player={player} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PlayerTeamWindow;
