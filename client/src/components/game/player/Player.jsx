import React from "react";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";
import useStylesBase from "../../../styles/StylesBase";
import PlayerCard from "../cards/PlayerCard";
import PlayerEnergyBar from "./PlayerEnergyBar";

const PlayerNameTypography = withStyles((theme) => ({
  root: {
    color: "textSecondary",
    fontWeight: 600,
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
  },
}))(Typography);

// Handle player card within team window.
const Player = (props) => {
  const classesBase = useStylesBase();

  const playerTeamCard = {
    id: props.player.id,
    src: props.player.src,
    alt: props.player.alt,
  };

  return (
    <Card className={classesBase.cardOverride}>
      <CardContent>
        <PlayerNameTypography>Player {props.player.turn}</PlayerNameTypography>
        <PlayerNameTypography>{props.player.name}</PlayerNameTypography>

        {<PlayerCard card={playerTeamCard} />}
        <PlayerEnergyBar energyValue={props.player.energy} />
      </CardContent>
    </Card>
  );
};
export default Player;
