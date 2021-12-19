import { Grid, ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import GameCard from "./GameCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },

  playerCard: {
    height: "8rem",
    width: "6rem",
  },

  //   expand: {
  //     transform: "rotate(0deg)",
  //     marginLeft: "auto",
  //     transition: theme.transitions.create("transform", {
  //       duration: theme.transitions.duration.shortest,
  //     }),
  //   },
  //   expandOpen: {
  //     transform: "rotate(180deg)",
  //   },
  //   avatar: {
  //     backgroundColor: red[500],
  //   },
}));

// let PLAYER_CARD_VALUES = [0, 5, 10, 20, 25, 30, 40, 50, 80];

// let PLAYER_CARD_COUNT = [7, 9, 10, 9, 8, 10, 10, 7, 4];

// let PLAYER_CARDS = [];

// let cardDeckSize = 0;

// for (let cardTotal = 0; cardTotal < PLAYER_CARD_VALUES.length; cardTotal++) {
//   console.log("card deck size: " + cardDeckSize);
//   for (
//     let cardCounter = 0;
//     cardCounter < PLAYER_CARD_COUNT[cardTotal];
//     cardCounter++
//   ) {
//     PLAYER_CARDS[cardDeckSize] = {
//       id: `pc${PLAYER_CARD_VALUES[cardTotal]}-${cardCounter}`,
//       key: `pc${PLAYER_CARD_VALUES[cardTotal]}-${cardCounter}`,
//       name: "Player Card" + PLAYER_CARD_VALUES[cardTotal],
//       src: "playerCard_" + PLAYER_CARD_VALUES[cardTotal],
//       alt: "Player Card " + PLAYER_CARD_VALUES[cardTotal] + " image",
//       count: `${PLAYER_CARD_COUNT[cardTotal]}`,
//       value: `${PLAYER_CARD_VALUES[cardTotal]}`,
//     };
//     cardDeckSize++;
//   }
// }

const GameCardList = (props) => {
  const classes = useStyles();
  // console.log("list size: " + PLAYER_CARDS.length);
  const gameDeck = useSelector((state) => state.playerDeck.UnusedCards);


for (let index = 0; index < gameDeck.length; index++) {
  console.log(gameDeck[index])
  
}

  let player_cards_temp = [];

  for (let index = 40; index < 47; index++) {
    player_cards_temp[index] = gameDeck[index];
  }

  // for (let index = 0; index < PLAYER_CARDS.length; index++) {}

  //   let playerDeck = [];
  //    playerDeck = PLAYER_CARDS.map((card, index) => {
  //     <GameCard key={card.id} card={card} />

  //   });
  return (
    <Fragment>
      <h3>Your Hand</h3>
      <div className={classes.root}>
        {player_cards_temp.map((card) => {
          return (
            <GameCard
              key={card.id}
              card={card}
              cardStyle={classes.playerCard}
              onClick={props.onClick}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
export default GameCardList;
