import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
const HomePlayerList = () => {
  const players = useSelector((state) => state.allPlayers.players);

  return (
    <>
      <Grid container spacing={1} item xs={12} sm={12} md={12}>
        {players.map((player) => {
          return (
            <Grid item xs={12} key={player.key}>
              <p>{player.name}</p>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default HomePlayerList;
