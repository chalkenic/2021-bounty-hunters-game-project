import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import useStylesBase from "../../../styles/StylesBase";
import PlayerCard from "../../cards/PlayerCard";
import PlayerEnergyBar from "./PlayerEnergyBar";

const useStyles = makeStyles({});

const PlayerNameTypography = withStyles(() => ({
  root: {
    color: "textSecondary",
    fontWeight: 600,
    fontSize: "3rem",
  },
}))(Typography);

const Player = (props) => {
  const classesBase = useStylesBase();
  const classes = useStyles();

  const DUMMY_CARD = {
    id: 1,
    src: "playerCard_back",
    alt: "player card",
  };
  return (
    <Card className={classesBase.cardOverride}>
      <CardContent>
        <PlayerNameTypography>
          Player {props.player.playerName}
        </PlayerNameTypography>

        {<PlayerCard card={DUMMY_CARD} />}
        <PlayerEnergyBar />
      </CardContent>
    </Card>
  );
};
export default Player;
