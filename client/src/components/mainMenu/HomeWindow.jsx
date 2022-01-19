import React, { useState, useEffect } from "react";
import SetupCreator from "../mainMenu/setup/SetupCreator";
import WelcomeSummary from "../../components/mainMenu/WelcomeSummary";
import Header from "../layout/Header";
import { Container, Grid, TextField } from "@material-ui/core";
import useStylesBase from "../../styles/StylesBase";
import { makeStyles, createStyles, Paper } from "@material-ui/core";
import SetupPlayerLobby from "./setup/SetupPlayerLobby";
import AppPrimaryButton from "../../appComponents/AppPrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import {
  roomDeckPyramidActions,
  getRoomCardState,
} from "../../store/slices/roomDeck_Pyramid-slice";
import {
  resetGame,
  submitPlayer,
  saveLocalPlayer,
} from "../../store/actions/playerActions";

import { setCurrentPlayerName } from "../../store/slices/currentPlayer-slice";
import {
  submitRoomCards,
  getRoomCards,
} from "../../store/actions/roomDeckActions";

import store from "../../store/store";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(1),
    },
    buttonStartGame: {
      backgroundColor: "green !important",
      color: "white",
      fontWeight: "bolder",
      "&:hover": {
        backgroundColor: `${theme.palette.primary.dark} !important`,
      },
    },
  })
);

function useRoomCards() {
  const cards = useSelector((state) => state.pyramidRoomDeck.dungeonDeck);

  return cards;
}

const HomeWindow = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const classesBase = useStylesBase();
  // const currentPlayerCheck = 0;
  const currentPlayerCheck = useSelector(
    (state) => state.allPlayers.players.length
  );

  let playerSubmitted = false;

  const currentGameCheck = useSelector((state) => state.pyramidRoomDeck);

  const roomCards = useSelector((state) => state.pyramidRoomDeck.dungeonDeck);
  const roomCardsInitialized = useSelector(
    (state) => state.pyramidRoomDeck.initialized
  );

  const { player } = useSelector((state) => state.currentPlayer);

  useEffect(() => {
    if (player.name !== undefined && !playerSubmitted) {
      dispatch(submitPlayer(player));
      // dispatch(saveLocalPlayer(player));
    }
  }, [player.name]);

  useEffect(() => {
    if (roomCardsInitialized === false) {
      dispatch(roomDeckPyramidActions.generateNewDeck());
    }
  }, [player]);

  const onGameStart = () => {
    console.log("0. current deck", roomCards);
    console.log("1. starting the game");
    console.log("2. Is there a player master?", player.master);
    if (player.master) {
      console.log(roomCardsInitialized);
      dispatch(submitRoomCards(roomCards));
    } else {
      dispatch(getRoomCards());
    }
  };

  return (
    <Container className={classesBase.homeOverride}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <WelcomeSummary />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <SetupCreator />
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <AppPrimaryButton
            className={classes.buttonStartGame}
            onClick={onGameStart}
            to="/game/game1"
          >
            Start Game
          </AppPrimaryButton>
          {/* {player.name !== "" ? (
            <div>player set</div>
          ) : ( */}
          {/* <>
            <TextField
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />

            <AppPrimaryButton
              onClick={() => {
                dispatch(setCurrentPlayerName(playerName));
              }}
            >
              Submit Name
            </AppPrimaryButton>
          </> */}
          {/* )} */}
          <AppPrimaryButton onClick={() => dispatch(resetGame())}>
            reset players
          </AppPrimaryButton>
        </Grid>
        <Grid item xs={1}>
          <AppPrimaryButton to="/game/game1">new Game</AppPrimaryButton>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <SetupPlayerLobby />
          </Paper>
        </Grid>
      </Grid>
      <Grid container></Grid>
    </Container>
  );
};
export default HomeWindow;
