import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayerCard from "../cards/PlayerCard";
import { playerDeckActions } from "../../../store/slices/playerCardDeck-slice";

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

const PlayerHand = () => {
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
      dispatch(playerDeckActions.setUpHands("player1"));
    } else if (playerHand.length <= 7) {
      // playerHand.slice(1);
    }
  }, [playerHand]);

  return (
    <div>
      <h3>Your Hand</h3>

      <div className={classes.root}>
        {playerHand.map((card, index) => {
          return <PlayerCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};
export default PlayerHand;
