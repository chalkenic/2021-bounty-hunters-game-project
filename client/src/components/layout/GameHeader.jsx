import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const GameHeader = (props) => {
  const currentPlayer = useSelector((state) => state.currentPlayer.player);
  return (
    <>
      <Grid item xs={3} s={3} m={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3">{currentPlayer.name}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={9} s={9} m={9}>
        <Typography variant="h1">BOUNTY HUNTERS</Typography>
      </Grid>
    </>
  );
};
export default GameHeader;
