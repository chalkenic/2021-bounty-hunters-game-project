import {
  Button,
  Container,
  Fab,
  Grid,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import PlayerHand from "./player/PlayerHand";
import DungeonProgressBar from "./gameTracking/DungeonProgressBar";
import { useDispatch, useSelector } from "react-redux";
import PlayerTeamWindow from "./dungeonWindows/PlayerTeamWindow";
import AppTheme from "../../styles/AppTheme";
// import GamePlayLog from "./gameLog/GamePlayLog";
import CardDeckWindow from "./dungeonWindows/CardDeckWindow";
import GameplayWindow from "./dungeonWindows/GameplayWindow";
import PlayerHandWindow from "./dungeonWindows/PlayerHandWindow";
import { playerDeckActions } from "../../store/slices/playerCardDeck-slice";
import { progressBarActions } from "../../store/slices/progressBar-slice";
import { roomDeckPyramidActions } from "../../store/slices/roomDeck_Pyramid-slice";
import { gamePlayerActions } from "../../store/slices/gamePlayers-slice";
import {
  rollHitChance,
  checkRoundEnded,
  shufflePlayers,
} from "../helpers/gameHelpers";
import { testAction } from "../../store/actions/playerActions";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import TutorialModal from "./tutorial/TutorialModal";

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
  const playerHand = useSelector(
    (state) => state.playerDeck.playerHands.player1
  );
  const players = useSelector((state) => state.gamePlayers.players);
  const progress = useSelector((state) => state.progressBar.progress);
  const currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );
  const handleEndTurn = () => {
    dispatch(
      progressBarActions.increaseProgress(
        playerHand.find((card) => card.clicked)
      )
    );
    if (checkRoundEnded(currentRoomCard.health, progress)) {
      for (let idx = 0; idx < players.length; idx++) {
        console.log("checking player", players[idx]);
        console.log("targets of card:", currentRoomCard.target);
        if (
          currentRoomCard.target.includes(idx) &&
          rollHitChance(currentRoomCard.hitChance)
        ) {
          console.log("player", players[idx], "taking damage!");
          dispatch(
            gamePlayerActions.reducePlayerEnergy({
              id: players[idx].id,
              damage: currentRoomCard.damage,
            })
          );
        }
      }
    }
    dispatch(
      playerDeckActions.dealNewCard(playerHand.find((card) => card.clicked))
    );
    handlePlayerOrder();
  };

  const handlePlayerOrder = () => {
    let shuffledPlayers = shufflePlayers(players);
    shuffledPlayers.map((player, index) =>
      dispatch(
        gamePlayerActions.addTurnToPlayer({ id: player.id, turn: index })
      )
    );
  };



  return (
    <Container
      style={{ padding: "5px", maxHeight: window.innerHeight }}
      className={classes.root}
    >
      <Grid container className={classes.gameBoard}>
        <Grid item xs={12} s={12} m={12}>
          <Typography variant="h1">BOUNTY HUNTERS</Typography>
        </Grid>

        {/* <Grid item xs={2}>
          <Grid item xs={12}>
            
          </Grid>
        </Grid> */}

        <Grid item xs={12}>
          <DungeonProgressBar />
        </Grid>

        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          style={{ maxHeight: window.innerHeight }}
          classes={classes.playerWindow}
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
              <Button variant="contained" onClick={() => handleEndTurn()}>
                End turn
              </Button>
              <Button onClick={() => dispatch(testAction())}>
                socket test
              </Button>
              <PlayerHand />
            </PlayerHandWindow>
          </Grid>
        </Grid>
        <Grid item xs={2} style={{ padding: "0 5px" }}>
          {/* <GamePlayLog /> */}
          <CardDeckWindow />
        </Grid>
      </Grid>
    </Container>
  );
};
export default GameWindow;
