import React from "react";
import { Grid, Typography } from "@material-ui/core";

const CardScoreTracker = (props) => {
  return (
    <>
      <Typography variant="h6">Potential Points</Typography>
      <Grid>
        {props.roomCard && props.roomCard && props.roomCard ? (
          <>
            <Typography variant="body2">{props.roomCard.score}</Typography>
          </>
        ) : (
          <Typography>No card generated.</Typography>
        )}
      </Grid>
    </>
  );
};
export default CardScoreTracker;
