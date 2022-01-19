import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const CardTargetTracker = (props) => {
  const players = useSelector((state) => state.allPlayers.players);
  console.log("players:", players);
  console.log("players length:", players.length);
  const currentCard = useSelector((state) => state.pyramidRoomDeck.currentCard);

  return (
    <>
      <Typography variant="h6">Card Target(s)</Typography>
      <Grid item>
        {currentCard &&
        currentCard.hitChance &&
        currentCard.damage &&
        players.length > 1 ? (
          <>
            {currentCard.target.map((target) => {
              return <Typography key={target}>Player {target + 1}</Typography>;
            })}
          </>
        ) : (
          <Typography>Single Player</Typography>
        )}
      </Grid>
    </>
  );
};
export default CardTargetTracker;
