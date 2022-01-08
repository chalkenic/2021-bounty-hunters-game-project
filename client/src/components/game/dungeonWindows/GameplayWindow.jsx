import React from "react";
import { Card, Grid, Paper } from "@material-ui/core";

const GameplayWindow = (props) => {
  return (
    <>
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={2} style={{ padding: "0 5px" }}>
          <Paper>Turn order</Paper>
        </Grid>
        <Grid item xs={4} style={{ padding: "0 5px" }}>
          <Paper>Dungeon Card and effects</Paper>
        </Grid>
        <Grid item xs={6} style={{ padding: "0 5px" }}>
          <Paper>game log</Paper>
        </Grid>
      </Grid>
      {/* <Card xs={12}>
        <CardContent>Current Dungeon Card and effects</CardContent>
      </Card>
      <Card xs={12}>
        <CardContent>game log</CardContent> */}
      {/* </Card> */}
    </>
  );
};
export default GameplayWindow;
