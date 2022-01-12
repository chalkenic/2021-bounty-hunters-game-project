import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardSize: {
    // margin: "0.2rem",
    // height: "9rem",
  },

  cardImgSize: {
    height: "100%",
    width: "100%",
    // [theme.breakpoints.down("sm")]: {
    //   height: "6rem",
    //   width: "4rem",
    // },+
    // [theme.breakpoints.down("xs")]: {
    //   height: "5.5rem",
    //   width: "3.7rem",
    // },
  },
}));

const DungeonCard = ({ card }) => {
  const classes = useStyles();

  return (
    <div>
      <img
        className={classes.cardImgSize}
        src={`${process.env.PUBLIC_URL}/static/pyramidCardImages/${card.src}.png`}
        alt={card.alt}
        back={`${process.env.PUBLIC_URL}/static/playerCardImages/playerCard_back.svg`}
      />
    </div>
  );
};
export default DungeonCard;
