import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React, { useState, useContext } from "react";
import PlayerCardContext from "../../store/cardChoice-context";

const useStyles = makeStyles((theme) => ({
  cardSize: {
    margin: "0.5%",
    border: " 2px solid black",
    height: "164px",
    // width: "10%",
    // margin: '0',
  },

  cardSelectedColor: {
    border: " 3px solid gold",
  },

  cardUnselectedColor: {
    border: " 3px solid",
  },
}));

const GameCard = ({ card, cardStyle }) => {
  const playerCardCtx = useContext(PlayerCardContext);
  const classes = useStyles();
  // const cardValue = card.value;
  const [cardChoice, setCardChoice] = useState(0);

  const cardClickedHandler = (cardValue) => {
    playerCardCtx.addPlayer__choice({
      id: 0,
      turnOrder: 1,
      playerId: 1,
      cardValue: cardValue,
    });
  };

  return (
    <div
      className={clsx(classes.cardSize, {
        [classes.cardSelectedSize]: cardChoice,
        [classes.cardUnselectedSize]: !cardChoice,
      })}
    >
      <img
        className={cardStyle}
        src={`${process.env.PUBLIC_URL}/static/playerCardImages/${card.src}.svg`}
        alt={card.alt}
        back={`${process.env.PUBLIC_URL}/static/playerCardImages/playerCard_back.svg`}
        onPlayerCardChosen={cardClickedHandler}
        // className={card.type}
      />
    </div>
  );
};
export default GameCard;
