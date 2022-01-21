import React, { useEffect } from "react";
import SetupCreator from "../mainMenu/setup/SetupCreator";
import WelcomeSummary from "../../components/mainMenu/setup/WelcomeSummary";
import HomeHeader from "../layout/HomeHeader";
import { Container, Divider, Grid } from "@material-ui/core";
import useStylesBase from "../../styles/StylesBase";
import { makeStyles, createStyles, Paper } from "@material-ui/core";
import SetupPlayerLobby from "./setup/SetupPlayerLobby";
import AppPrimaryButton from "../../appComponents/AppPrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { roomDeckPyramidActions } from "../../store/slices/roomDeck_Pyramid-slice";
import { resetGame, submitPlayer } from "../../store/actions/playerActions";
import { playerDeckActions } from "../../store/slices/playerCardDeck-slice";
import { allPlayerActions } from "../../store/slices/allPlayers-slice";
import { resetPlayer } from "../../store/slices/currentPlayer-slice";
import { useNavigate } from "react-router-dom";

import { submitRoomCards } from "../../store/actions/roomDeckActions";

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
  const allPlayers = useSelector((state) => state.allPlayers.players);
  const roomCardsInitialized = useSelector(
    (state) => state.pyramidRoomDeck.initialized
  );

  const { player } = useSelector((state) => state.currentPlayer);

  // Checks if game over.
  if (roomCards.length === 0) {
    dispatch(resetPlayer());
    dispatch(resetGame("homewindow"));
  }

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
    if (allPlayers.length > 0) {
      navigate("/");
      dispatch(roomDeckPyramidActions.startGame());

      if (player.master) {
        dispatch(submitRoomCards(roomCards));
      }
    }
  };

  const resetOnclick = () => {
    dispatch(resetGame("button"));
  };
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
        <Grid item xs={2}>
        </Grid>
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
};
export default HomeWindow;
