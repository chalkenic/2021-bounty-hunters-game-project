import React from "react";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";
import useStylesBase from "../../../styles/StylesBase";
import PlayerCard from "../cards/PlayerCard";
import PlayerEnergyBar from "./PlayerEnergyBar";

// const useStyles = makeStyles({});

const PlayerNameTypography = withStyles(() => ({
  root: {
    color: "textSecondary",
    fontWeight: 600,
    fontSize: "3rem",
  },
}))(Typography);

const Player = (props) => {
  const classesBase = useStylesBase();
  // const classes = useStyles();

  const DUMMY_CARD = {
    id: 1,
    src: "playerCard_back",
    alt: "player card",
  };

  console.log(
    "energy value in parent component of player ",
    props.player.name,
    ":",
    props.player.energy
  );
  return (
    <Card className={classesBase.cardOverride}>
      <CardContent>
        <PlayerNameTypography>
          {props.player.name}
        </PlayerNameTypography>

        {<PlayerCard card={DUMMY_CARD} />}
        <PlayerEnergyBar energyValue={props.player.energy} />
      </CardContent>
    </Card>
  );
};
export default Player;
