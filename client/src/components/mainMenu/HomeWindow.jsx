import React, { useEffect } from "react";
import SetupCreator from "../mainMenu/setup/SetupCreator";
import WelcomeSummary from "../../components/mainMenu/WelcomeSummary";
import Header from "../layout/Header";
import { Container, Grid } from "@material-ui/core";
import useStylesBase from "../../styles/StylesBase";
import { makeStyles, createStyles, Paper } from "@material-ui/core";
import SetupPlayerLobby from "./setup/SetupPlayerLobby";
import AppPrimaryButton from "../../appComponents/AppPrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { roomDeckPyramidActions } from "../../store/slices/roomDeck_Pyramid-slice";
import { resetGame, submitPlayer } from "../../store/actions/playerActions";

import {
  submitRoomCards,
  getRoomCards,
} from "../../store/actions/roomDeckActions";

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

const HomeWindow = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const classesBase = useStylesBase();

  let playerSubmitted = false;

  const roomCards = useSelector((state) => state.pyramidRoomDeck.dungeonDeck);
  const roomCardsInitialized = useSelector(
    (state) => state.pyramidRoomDeck.initialized
  );

  const { player } = useSelector((state) => state.currentPlayer);

  useEffect(() => {
    if (player.name !== undefined && !playerSubmitted) {
      dispatch(submitPlayer(player));
    }
  }, [player.name]);

  useEffect(() => {
    if (roomCardsInitialized === false) {
      dispatch(roomDeckPyramidActions.generateNewDeck());
    }
  }, [player]);

  const onGameStart = () => {
    if (player.master) {
      dispatch(submitRoomCards(roomCards));
    } else {
      // dispatch(getRoomCards());
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
