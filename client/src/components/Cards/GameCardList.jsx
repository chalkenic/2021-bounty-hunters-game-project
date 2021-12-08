import { Grid, ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import GameCard from "./GameCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    // overflow: "hidden",
  },

  media: {
    // height: '25%',
    // width: '25%'
    // paddingTop: "56.25%",
  },

  playerCard: {
    height: "10rem",
    width: "7rem",
    // border: "5px solid black",
  },

  // imageList: {
  //   flexWrap: "wrap",
  //   // transform: "translateZ(0)",
  //   rowHeight: "50",
  //   gap: "0",
  //   component: "ul",
  // },

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

let PLAYER_CARD_VALUES = [0, 5, 10, 20, 25, 30, 40, 50, 80];

let PLAYER_CARD_COUNT = [7, 9, 10, 9, 8, 10, 10, 7, 4];

let PLAYER_CARDS = [];

let cardDeckSize = 0;

for (let cardTotal = 0; cardTotal < PLAYER_CARD_VALUES.length; cardTotal++) {
  console.log("card deck size: " + cardDeckSize);
  for (
    let cardCounter = 0;
    cardCounter < PLAYER_CARD_COUNT[cardTotal];
    cardCounter++
  ) {
    PLAYER_CARDS[cardDeckSize] = {
      id: `pc${PLAYER_CARD_VALUES[cardTotal]}-${cardCounter}`,
      key: `pc${PLAYER_CARD_VALUES[cardTotal]}-${cardCounter}`,
      name: "Player Card" + PLAYER_CARD_VALUES[cardTotal],
      src: "playerCard_" + PLAYER_CARD_VALUES[cardTotal],
      alt: "Player Card " + PLAYER_CARD_VALUES[cardTotal] + " image",
      count: `${PLAYER_CARD_COUNT[cardTotal]}`,
      value: `${PLAYER_CARD_VALUES[cardTotal]}`,
    };
    cardDeckSize++;
  }
}

const GameCardList = (props) => {
  const classes = useStyles();
  console.log("list size: " + PLAYER_CARDS.length);

  let player_cards_temp = [];

  for (let index = 13; index < 20; index++) {
    player_cards_temp[index] = PLAYER_CARDS[index];
  }

  for (let index = 0; index < PLAYER_CARDS.length; index++) {
  }

  //   let playerDeck = [];
  //    playerDeck = PLAYER_CARDS.map((card, index) => {
  //     <GameCard key={card.id} card={card} />

  //   });

  return (
    <div className={classes.root}>
      {player_cards_temp.map((card) => {
        return (
          <GameCard key={card.id} card={card} cardStyle={classes.playerCard} onClick = {props.onClick}/>
        );
      })}
    </div>
  );
};
export default GameCardList;
