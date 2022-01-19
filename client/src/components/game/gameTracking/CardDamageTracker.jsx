import React from "react";
import { Grid, Typography } from "@material-ui/core";

const CardDamageTracker = (props) => {
  return (
    <>
      <Typography variant="h6">Card Damage</Typography>
      <Grid>
        {props.roomCard && props.roomCard && props.roomCard ? (
          <>
            <Typography variant="body2">
              {props.roomCard.hitChance}% chance of {props.roomCard.damage}{" "}
              energy damage
            </Typography>
          </>
        ) : (
          <Typography>No card generated.</Typography>
        )}
      </Grid>
    </>
  );
};
export default CardDamageTracker;
