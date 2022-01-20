import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import NavMenu from "../../appComponents/NavMenu";

const GameHeader = (props) => {
  const currentPlayer = useSelector((state) => state.currentPlayer.player);
  return (
    <>
      <Grid item xs={3} s={3} m={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3">Player: {currentPlayer.name}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={7} s={7} m={7}>
        <Typography variant="h1" align="center" gutterBottom>
          BOUNTY HUNTERS
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <NavMenu />
      </Grid>
    </>
  );
};
export default GameHeader;
