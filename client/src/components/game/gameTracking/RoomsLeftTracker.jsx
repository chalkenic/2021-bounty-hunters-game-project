import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

// Track how many room cards left in state.
const RoomsLeftTracker = () => {
  const cardCount = useSelector((state) => state.pyramidRoomDeck.deckSize);

  return (
    <Grid style={{ paddingTop: 40, paddingBottom: 20 }}>
      <Typography variant="h6">Rooms Left</Typography>

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
