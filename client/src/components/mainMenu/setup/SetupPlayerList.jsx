import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";

const HomePlayerList = (props) => {
  const players = useSelector((state) => state.gamePlayers.players);
  return (
    <>
      <Typography variant="h6" component="h4">
        Players
      </Typography>
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
