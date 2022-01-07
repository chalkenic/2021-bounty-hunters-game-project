import React from "react";
import { Card, Grid, Paper } from "@material-ui/core";

const GameplayWindow = (props) => {
  return (
    <div>
      <Grid container style={{ flexDirection: "column" }}>
        <Grid item xs={3}>
          <Paper>Turn order</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>Dungeon Card and effects</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>game log</Paper>
        </Grid>
      </Grid>
      {/* <Card xs={12}>
        <CardContent>Current Dungeon Card and effects</CardContent>
      </Card>
      <Card xs={12}>
        <CardContent>game log</CardContent> */}
      {/* </Card> */}
    </div>
  );
};
export default GameplayWindow;
