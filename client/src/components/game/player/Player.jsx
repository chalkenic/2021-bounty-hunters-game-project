import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import useStylesBase from "../../../styles/StylesBase";
import GameCard from "../../cards/GameCard";
import PlayerEnergyBar from "./PlayerEnergyBar";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  title: {
    fontSize: 14,
  },
});

const Player = (props) => {
  const classesBase = useStylesBase();
  const classes = useStyles();

  const DUMMY_CARD = {
    id: 1,
    src: "playerCard_back",
    alt: "player card",
  };
  return (
    <Card className={(classes.root, classesBase.cardOverride)}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {props.player.playerName}
        </Typography>
        <PlayerEnergyBar />
        <CardContent xs={12}>{<GameCard card={DUMMY_CARD} />}</CardContent>
      </CardContent>
    </Card>
  );
};
export default Player;
