// import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { progressBarActions } from "../../store/progressBar-slice";
import { playerCardDeckActions } from "../../store/playerDeck-slice";

const useStyles = makeStyles((theme) => ({
  cardSize: {
    margin: "0.2rem",
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
    border: " 3px solid gold",
  },

  // Border remains empty if unclicked
  cardUnselectedColor: {
    border: " 3px solid",
  },
}));

const GameCard = ({ card }, props) => {
  const dispatch = useDispatch();

  const progressBarIncreaseHandler = () => {
    // console.log( card.value + ' added to progress bar!');
    dispatch(progressBarActions.increaseProgress(parseInt(card.value)));
  };

  const classes = useStyles();
  // const cardValue = card.value;
  const [cardChoice, setCardChoice] = useState();

  return (
    <div className={classes.cardSize} onClick={progressBarIncreaseHandler}>
      <img
        className={clsx(classes.cardImgSize, {
          [classes.cardSelectedColor]: cardChoice,
          [classes.cardUnselectedColor]: !cardChoice,
        })}
        src={`${process.env.PUBLIC_URL}/static/playerCardImages/${card.src}.svg`}
        alt={card.alt}
        back={`${process.env.PUBLIC_URL}/static/playerCardImages/playerCard_back.svg`}

        // className={card.type}
      />
    </div>
  );
};
export default GameCard;
