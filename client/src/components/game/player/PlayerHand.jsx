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
  playerHeader: {
    fontWeight: "20 !important",
    fontSize: "30px !important",
  },
}));

// Handle player cards within individual player hands. Unique to each connection.
const PlayerHand = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const playerHand = useSelector((state) => state.playerDeck.playerHand);

  useEffect(() => {
    if (playerHand.length === 0) {
      dispatch(playerDeckActions.setUpHands("player1"));
    } else if (playerHand.length <= 7) {
    }
  }, [playerHand]);

  return (
    <div>
      <h1 className={classes.playerHeader}>Your Hand</h1>

      <div className={classes.root}>
        {playerHand.map((card) => {
          return <PlayerCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};
export default PlayerHand;
