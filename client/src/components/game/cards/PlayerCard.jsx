// import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { playerDeckActions } from "../../../store/slices/playerCardDeck-slice";
import { allPlayerActions } from "../../../store/slices/allPlayers-slice";

const useStyles = makeStyles((theme) => ({
  cardSize: {
    margin: "0.1rem",
    // height: "9rem",
  },

  cardImgSize: {
    border: " 2px solid black",
    height: "7rem",
    width: "5rem",
    [theme.breakpoints.down("sm")]: {
      height: "6rem",
      width: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5rem",
      width: "3.7rem",
    },
  },

  // When selected, specific card border highlighted.
  cardSelectedColor: {
    border: " 5px solid orange",
  },

  // Border remains empty if unclicked
  cardUnselectedColor: {
    border: " 3px solid",
  },
}));

const PlayerCard = ({ card }) => {
  const dispatch = useDispatch();

  const cardClickedHandler = () => {
    dispatch(playerDeckActions.cardClicked(card));
    console.log('card:', card,'selected');
    dispatch(allPlayerActions.roundCardChosen(1));
  };

  const classes = useStyles();
  // const cardValue = card.value;

  return (
    <div className={classes.cardSize} onClick={cardClickedHandler}>
      <img
        className={clsx(
          classes.cardImgSize,
          card.clicked ? classes.cardSelectedColor : classes.cardUnselectedColor
        )}
        src={`${process.env.PUBLIC_URL}/static/playerCardImages/${card.src}.svg`}
        alt={card.alt}
        back={`${process.env.PUBLIC_URL}/static/playerCardImages/playerCard_back.svg`}

        // className={card.type}
      />
    </div>
  );
};
export default PlayerCard;
