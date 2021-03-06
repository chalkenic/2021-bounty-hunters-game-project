import React from "react";
import { Grid, Typography } from "@material-ui/core";

// Tracks potential energy damage that card can perform on players.
const CardDamageTracker = (props) => {
  return (
    <Grid style={{ paddingTop: 30 }}>
      <Typography variant="h6">Card Damage</Typography>

      {props.roomCard && props.roomCard && props.roomCard ? (
        <>
          <Typography variant="body2">
            {props.roomCard.hitChance}% chance of {props.roomCard.damage} energy
            damage
          </Typography>
        </>
      ) : (
        <Typography>No card generated.</Typography>
      )}
    </Grid>
  );
};
export default CardDamageTracker;
