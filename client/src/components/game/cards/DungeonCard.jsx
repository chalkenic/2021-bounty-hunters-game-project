import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  cardImgSize: {
    height: "100%",
    width: "100%",
  },
}));
// Creates dungeon room card component equal to parsed card asset.
const DungeonCard = ({ card }) => {
  const classes = useStyles();

  return (
    <div>
      {card && card.src ? (
        <img
          className={classes.cardImgSize}
          src={`${process.env.PUBLIC_URL}/static/pyramidCardImages/${card.src}.png`}
          alt={card.alt}
          back={`${process.env.PUBLIC_URL}/static/playerCardImages/playerCard_back.svg`}
        />
      ) : (
        <div>No img available</div>
      )}
    </div>
  );
};
export default DungeonCard;
