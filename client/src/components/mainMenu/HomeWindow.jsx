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
import { resetGame, submitPlayer } from "../../store/actions/playerActions";

import { setCurrentPlayerName } from "../../store/slices/currentPlayer-slice";
import { submitRoomCards,getRoomCards } from "../../store/actions/roomDeckActions";

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
    (state) => state.gamePlayers.players.length
  );

  const currentGameCheck = useSelector((state) => state.pyramidRoomDeck);

  const roomCards = useSelector((state) => state.pyramidRoomDeck.dungeonDeck);
  // const roomCardsInitialized = useSelector(
  //   (state) => state.pyramidRoomDeck.initialized
  // );

  const { player } = useSelector((state) => state.currentPlayer);

  // const [playerName, setPlayerName] = useState("");
  const [currentGame] = useState(currentGameCheck);

  useEffect(() => {
    if (player.name !== undefined) {
      dispatch(submitPlayer(player));
    }
  }, [player]);


  // let tempNames = ["cheese", "biscuits", "crackers"];

  const onGameStart = () => {
    console.log("1. starting the game");
    console.log("2. Is there a player master?", player.master);
    // store.dispatch("NEW_GAME");
    if (player.master) {
      console.log("3. Master exists. Host is setting up the game...");
      console.log("4. current game check: ", currentGameCheck);
      console.log('room card length:', roomCards)
      if (roomCards.length === 0 || roomCards === undefined) {
        console.log("game doesn't exist, creating a new one...")
        console.log('Cards for dispatch A',roomCards);
        dispatch(roomDeckPyramidActions.generateNewDeck());}

        else {
          console.log('dispatch submitRoomCards A',roomCards);
          dispatch(submitRoomCards(roomCards))
        }
      
      // for (let index = 0; index < 3; index++) {
      //   newPlayers[index] = {
      //     id: index,0
      //     name: tempNames[index],
      //   };
      // }

      // console.log("5. does a game already exist?", currentGameCheck);

      // if (roomCardsInitialized === undefined) {
        // console.log("5.a. game does not exist! creating a game...");
        // console.log(
        //   "6. Checking if a deck has been generated:",
        //   roomCards.length
        // );
        // if (roomCards.length === 0 || roomCards.length === undefined) {
        //   console.log("6.a: generating room deck...");
        //   dispatch(roomDeckPyramidActions.generateNewDeck());
        //   // dispatch(submitRoomCards(state.pyramidRoomDeck.dungeonDeck  ));
        //   console.log(
        //     "7. Room cards made! sending to server! Game window has finished tasks."
        //   );

        //   // console.log(
        //   //   "are there room cards?",
        //   //   store.getState().pyramidRoomDeck.dungeonDeck
        //   // );#

        //   console.log(currentGameCheck);
        //   console.log(roomCards);

        //   dispatch(submitRoomCards(roomCards));

        //   // dispatch(submitRoomCards(roomCards));
        // } else {
        //   console.log("8. Deck already created! moving to game");
        // }

        // dispatch(submitRoomCards(roomCards));
      // } else {
      //   console.log("5.b. A game exists. taking you to it... ");
      // }
    // } else {
    //   console.log(
    //     "player is not master. attempting load into a current game..."
    //   );
      // roomDeckPyramidActions.setCurrentCard(currentGame);
    } else {
      console.log('Setting player up into game...');
      dispatch(getRoomCards())

    }
  };

  // const onGameContinue = () => {};

  useEffect(() => {
    console.log('am i getting here?')
    if (roomCards.length === 0 || roomCards === undefined) {
    dispatch(roomDeckPyramidActions.generateNewDeck());
    }
    // dispatch(submitRoomCards(newDeck));
  }, [])
  



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
