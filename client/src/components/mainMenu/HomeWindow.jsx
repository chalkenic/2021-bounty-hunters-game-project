import React, { useEffect } from "react";
import WelcomeSummary from "../../components/mainMenu/setup/WelcomeSummary";
import HomeHeader from "../layout/HomeHeader";
import { Container, Grid } from "@material-ui/core";
import useStylesBase from "../../styles/StylesBase";
import { makeStyles, createStyles, Paper } from "@material-ui/core";
import SetupPlayerLobby from "./setup/SetupPlayerLobby";
import { useDispatch, useSelector } from "react-redux";
import { roomDeckPyramidActions } from "../../store/slices/roomDeck_Pyramid-slice";
import { resetGame, submitPlayer } from "../../store/actions/playerActions";
import { playerDeckActions } from "../../store/slices/playerCardDeck-slice";
import { useNavigate } from "react-router-dom";

import { submitRoomCards } from "../../store/actions/roomDeckActions";
import { useState } from "react";
import ErrorModal from "../game/tutorial/ErrorModal";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const classesBase = useStylesBase();

  let playerSubmitted = false;

  const roomCards = useSelector((state) => state.pyramidRoomDeck.dungeonDeck);
  const roomCardsInitialized = useSelector(
    (state) => state.pyramidRoomDeck.initialized
  );

  const { player } = useSelector((state) => state.currentPlayer);
  const [valueError, setValueError] = useState(false);

  const handleValueErrorClose = () => {
    setValueError(false);
  };

  const handleValueError = () => {
    setValueError(true);
  };

  useEffect(() => {
    if (player.name !== undefined && !playerSubmitted) {
      dispatch(submitPlayer(player));
    }
  }, [player.name]);

  useEffect(() => {
    if (roomCardsInitialized === false) {
      dispatch(roomDeckPyramidActions.generateNewDeck());
      dispatch(playerDeckActions.generateNewDeck());
    }
  }, [player]);

  const onGameStart = () => {
    navigate("/");
    dispatch(roomDeckPyramidActions.startGame());

    if (player.master) {
      dispatch(submitRoomCards(roomCards));
    }
  };

  const resetOnclick = () => {
    dispatch(resetGame("button"));
  };
  try {
    return (
      <Container className={classesBase.homeOverride}>
        <Grid container>
          <Grid item xs={12}>
            <HomeHeader />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <WelcomeSummary />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <SetupPlayerLobby
                onClickReset={resetOnclick}
                onClickStart={onGameStart}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container></Grid>
      </Container>
    );
  } catch {
    handleValueError(true);
    return (
      <ErrorModal open={valueError} handleClose={handleValueErrorClose}>
        An error occurred on attempting to launch the game. Please try again.
      </ErrorModal>
    );
  }
};
export default HomeWindow;
