import React from "react";
import { Grid, Typography, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    playerHeader: {
      fontWeight: "600 !important",
      fontSize: "20px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px !important",

      },

    },
  })
);

// Tracks potential energy damage that card can perform on players.
const CardDamageTracker = (props) => {
  const classes = useStyles();
  return (
    <Grid style={{ paddingTop: 30 }}>
      <Typography variant="h1" className={classes.playerHeader}>Card Damage</Typography>

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
