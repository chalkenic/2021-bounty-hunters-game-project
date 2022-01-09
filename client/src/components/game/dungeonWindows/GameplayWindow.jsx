import React from "react";
import { Grid, Paper } from "@material-ui/core";
import DungeonCard from "../cards/DungeonCard";
import { pyramidDeckActions } from "../../../store/pyramidRoomDeck-slice";
import { useSelector } from "react-redux";

const GameplayWindow = (props) => {
  const dungeonCards = useSelector(
    (state) => state.pyramidRoomDeck.unusedCards
  );

  let test_card = dungeonCards[0];
  return (
    <>
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={2} style={{ padding: "0 5px" }}>
          <Paper>Turn order</Paper>
        </Grid>
        <Grid item xs={4} style={{ padding: "0 5px" }}>
          <Paper>Dungeon <i className="mdi mdi-card-bulleted-off:"></i>
            <DungeonCard card={test_card} />
            <p>
              {test_card.hitChance}% chance of {test_card.damage} energy loss
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ padding: "0 5px" }}>
          <Paper>game log</Paper>
        </Grid>
      </Grid>
      {/* <Card xs={12}>
        <CardContent>Current Dungeon Card and effects</CardContent>
      </Card>
      <Card xs={12}>
        <CardContent>game log</CardContent> */}
      {/* </Card> */}
    </>
  );
};
export default GameplayWindow;

// /static/pyramidCardImages/pyramidRoomCard_gas.svg
// /static/pyramidCardImages/pyramidRoomCard_sarcophagus.svg