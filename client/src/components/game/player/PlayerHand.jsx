import { Button, Grid, ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../../cards/PlayerCard";
import { progressBarActions } from "../../../store/progressBar-slice";
import { playerDeckActions } from "../../../store/playerDeck-slice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
}));

const PlayerHand = (props) => {
  const cardIndex = 0;
  const dispatch = useDispatch();
  const classes = useStyles();
  // console.log("list size: " + PLAYER_CARDS.length);
  const playerHand = useSelector(
    (state) => state.playerDeck.playerHands.player1
  );

  // for (let index = 0; index < gameDeck.length; index++) {
  //   console.log(gameDeck[index]);
  // }

  // let tempDeck = gameDeck.slice(gameDeck.length - 7);

  useEffect(() => {
    if (playerHand.length === 0) {
      console.log("temp deck empty!");
      dispatch(playerDeckActions.setUpHands("player1"));
    } else if (playerHand.length <= 7) {
      console.log("temp deck has 6 cards!", playerHand.length);
      playerHand.slice(1);
    }
  }, [playerHand]);

  const handleEndTurn = () => {
    dispatch(
      progressBarActions.increaseProgress(
        playerHand.find((card) => card.clicked)
      )
    );
    dispatch(playerDeckActions.dealNewCard(playerHand.find((card) => card.clicked)))
  };

  return (
    <div>
      <h3>Your Hand</h3>
      
      <div className={classes.root}>
        {playerHand.map((card, index) => {
          return (
            <PlayerCard
              key={card.id}
              card={card}
              cardStyle={classes.playerCard}
              zIndex={cardIndex}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PlayerHand;
