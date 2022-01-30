import React from "react";
import { Grid, Typography, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    pointsHeader: {
      fontWeight: "600 !important",
      fontSize: "20px !important",
    },
  })
);

// Tracks Score available to players if reaching progress end first.
const CardPointsTracker = (props) => {
  const classes = useStyles();
  return (
    <Grid style={{ paddingTop: 40 }}>
      <Typography variant="h1" className={classes.pointsHeader}>Available Points</Typography>

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
