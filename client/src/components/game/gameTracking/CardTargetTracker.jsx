import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const CardTargetTracker = (props) => {
  const players = useSelector((state) => state.allPlayers.players);
  console.log("players:", players);
  console.log("players length:", players.length);
  const currentCard = useSelector((state) => state.pyramidRoomDeck.currentCard);

  return (
    <Grid item style={{ paddingTop: 40 }}>
      <Typography variant="h6">Card Target(s)</Typography>

      {currentCard &&
      currentCard.hitChance &&
      currentCard.damage &&
      players.length >= 2 ? (
        <>
          {currentCard.target.map((target) => {
            return (
              <Typography style={{ fontStyle: "italic" }} key={target}>
                Player {target + 1}
              </Typography>
            );
          })}
        </>
      ) : (
        <Typography style={{ fontStyle: "italic" }}>
          Single Player Game
        </Typography>
      )}
    </Grid>
  );
};
export default CardTargetTracker;
