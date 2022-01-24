import React from "react";
import { Grid, Typography } from "@material-ui/core";

// Tracks Score available to players if reaching progress end first.
const CardPointsTracker = (props) => {
  return (
    <Grid style={{ paddingTop: 40 }}>
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
export default CardPointsTracker;
