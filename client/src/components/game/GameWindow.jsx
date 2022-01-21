import { useEffect } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import PlayerHand from "./player/PlayerHand";
import DungeonProgressBar from "./gameTracking/DungeonProgressBar";
import { useDispatch, useSelector } from "react-redux";
import PlayerTeamWindow from "./dungeonWindows/PlayerTeamWindow";
import AppTheme from "../../styles/AppTheme";
import GameTrackingWindow from "./dungeonWindows/GameTrackingWindow";
import GameplayWindow from "./dungeonWindows/GameplayWindow";
import PlayerHandWindow from "./dungeonWindows/PlayerHandWindow";
import { playerDeckActions } from "../../store/slices/playerCardDeck-slice";

import { addValueToPlayer } from "../../store/actions/playerActions";
import GameHeader from "../layout/GameHeader";

const useStyles = makeStyles((theme) => ({
  gameBoard: {
    backgroundColor: AppTheme.palette.background.board,
    borderTop: 5,
    borderRadius: 10,
    padding: 10,
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  handContainer: {
    alignItems: "center",
    display: "flex",
    justify: "center",
  },
}));

const GameWindow = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const playerHand = useSelector((state) => state.playerDeck.playerHand);
  let players = useSelector((state) => state.allPlayers.players);
  console.log("hand:", playerHand);
  // const progress = useSelector((state) => state.progressBar.progress);

  // const dungeonDeck = useSelector((state) => state.pyramidRoomDeck.dungeonDeck);

  if (playerHand === undefined) {
    // console.log("helooooooooooo");
    dispatch(playerDeckActions.generateNewDeck());
    dispatch(playerDeckActions.setUpHands());
  }

  useEffect(() => {
    // console.log("hand:", playerHand);
  }, [playerHand]);

  useEffect(() => {
    if (players.length === undefined || players.length < 2) {
      players = 0;
    }
  }, [players]);

  // useEffect(() => {
  //   const cardClicked = playerHand.find((card) => card.clicked);
  //   dispatch(playerDeckActions.dealNewCard(cardClicked));
  // }, [progress]);

  const playerTurnEnded = () => {
    let cardClicked = playerHand.find((card) => card.clicked);
    dispatch(addValueToPlayer(cardClicked.value));
    // dispatch(playerDeckActions.dealNewCard(cardClicked));
  };

  return (
    <Container
      style={{ padding: "5px", maxHeight: window.innerHeight }}
      className={classes.root}
    >
      <Grid container className={classes.gameBoard}>
        <GameHeader />
        <Grid item xs={12}>
          <DungeonProgressBar />
        </Grid>

        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          style={{ maxHeight: window.innerHeight }}
        >
          <PlayerTeamWindow />
        </Grid>

        <Grid container item xs={8} sm={8} md={8}>
          <Grid
            container
            style={{ padding: "0 5px", flexDirection: "column" }}
            item
            xs={12}
          >
            <GameplayWindow />
          </Grid>
          <Grid
            container
            alignItems="flex-end"
            justifyContent="center"
            item
            xs={12}
            sm={12}
            md={12}
            style={{ padding: "0 5px", width: "100%" }}
          >
            <PlayerHandWindow className={classes.handWindow}>
              <Button variant="contained" onClick={() => playerTurnEnded()}>
                End turn
              </Button>
              <PlayerHand />
            </PlayerHandWindow>
          </Grid>
        </Grid>
        <Grid item xs={2} style={{ padding: "0 5px" }}>
          {/* <GamePlayLog /> */}
          <GameTrackingWindow players={players} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default GameWindow;
