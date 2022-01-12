import { Button, Container, Grid } from "@material-ui/core";
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
import { playerDeckActions } from "../../store/playerCardDeck-slice";
import { progressBarActions } from "../../store/progressBar-slice";
import { pyramidDeckActions } from "../../store/pyramidRoomDeck-slice";
import { gamePlayerActions } from "../../store/gamePlayers-slice";
import { rollHitChance, checkRoundEnded } from "../helpers/gameHelpers";

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

  function reducePlayerEnergy(player) {
    return dispatch(gamePlayerActions.reduceEnergy(player));
  }

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
      for (let index = 0; index < players.length; index++) {
        if (
          currentRoomCard.target.includes(index) &&
          rollHitChance(currentRoomCard.hitChance)
        ) {
          dispatch(
            gamePlayerActions.reducePlayerEnergy({
              id: players[index].id,
              damage: currentRoomCard.damage,
            })
          );
        }
      }
    }
    dispatch(
      playerDeckActions.dealNewCard(playerHand.find((card) => card.clicked))
    );
  };

  return (
    <Container
      style={{ padding: "5px", maxHeight: window.innerHeight }}
      className={classes.root}
    >
      <Grid container className={classes.gameBoard}>
        <Grid item xs={12}>
          <h1>BOUNTY HUNTERS</h1>
        </Grid>
        <Grid item xs={10}>
          <DungeonProgressBar />
        </Grid>
        <Grid item xs={2}>
          <Grid item xs={12}>
            Dungeon floors
          </Grid>
          <Grid item xs={12}>
            6/8
            <Button onClick={() => handleEndTurn()}>End turn</Button>
          </Grid>
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
