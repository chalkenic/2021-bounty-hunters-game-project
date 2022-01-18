import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { getPlayers } from "../../../store/actions/playerActions";
const HomePlayerList = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const players = useSelector((state) => state.gamePlayers.players);


  // useEffect(() => {
  //   dispatch(getPlayers());
  // }, [players]);

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
