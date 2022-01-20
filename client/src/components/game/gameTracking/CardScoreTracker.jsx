import React from "react";
import { Grid, Typography } from "@material-ui/core";

const CardScoreTracker = (props) => {
  return (
    <Grid style={{ paddingTop: 60 }}>
      <Typography variant="h6">Available Points</Typography>

      {props.roomCard && props.roomCard !== undefined && props.roomCard ? (
        <>
          <Typography variant="body2">{props.roomCard.score}</Typography>
        </>
      ) : (
        <Typography>No card generated.</Typography>
      )}
    </Grid>
  );
};
export default CardScoreTracker;
