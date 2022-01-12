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

  const playerTeamCard = {
    id: props.player.id,
    src: props.player.src,
    alt: props.player.alt,
  };

  return (
    <Card className={classesBase.cardOverride}>
      <CardContent>
        <PlayerNameTypography>{props.player.name}</PlayerNameTypography>

        {<PlayerCard card={playerTeamCard} />}
        <PlayerEnergyBar energyValue={props.player.energy} />
      </CardContent>
    </Card>
  );
};
export default Player;
