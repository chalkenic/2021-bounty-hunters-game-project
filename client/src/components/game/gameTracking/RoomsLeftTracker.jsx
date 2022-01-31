import React from "react";
import { Grid, Typography, makeStyles, createStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    roomHeader: {
      fontWeight: "600 !important",
      fontSize: "20px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px !important",

      },
    },
  })
);

// Track how many room cards left in state.
const RoomsLeftTracker = () => {
  const classes = useStyles();
  const cardCount = useSelector((state) => state.pyramidRoomDeck.deckSize);

  return (
    <Grid style={{ paddingTop: 40, paddingBottom: 20 }}>
      <Typography variant="h1" className={classes.roomHeader}>
        Rooms Left
      </Typography>

      {cardCount > 0 ? (
        <>
          <Typography variant="body2">{cardCount}</Typography>
        </>
      ) : (
        <Typography>No cards Left!.</Typography>
      )}
    </Grid>
  );
};
export default RoomsLeftTracker;
