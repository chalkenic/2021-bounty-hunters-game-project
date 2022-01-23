import { useEffect, useState, useRef } from "react";
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

import { addValueToPlayer, resetGame } from "../../store/actions/playerActions";
import GameHeader from "../layout/GameHeader";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./tutorial/ErrorModal";
import GameCompletedModal from "./tutorial/GameCompletedModal";
import { roomDeckPyramidActions } from "../../store/slices/roomDeck_Pyramid-slice";

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
  expandgameOver: {
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
  const navigate = useNavigate();
  const currentPlayer = useSelector((state) => state.currentPlayer.player);
  const isGameOver = useSelector((state) => state.pyramidRoomDeck.gameOver);

  const [gameOver, setGameOver] = useState(false);
  const [valueError, setValueError] = useState(false);
  const playerHand = useSelector((state) => state.playerDeck.playerHand);

  let players = useRef(useSelector((state) => state.allPlayers.players));

  if (playerHand === undefined) {
    dispatch(playerDeckActions.generateNewDeck());
    dispatch(playerDeckActions.setUpHands());
  }


  useEffect(() => {}, [playerHand]);

  useEffect(() => {
    const player = players.current;
    if (players.length === undefined || players.length < 2) {
      players = 0;
    }
  }, [players]);

  useEffect(() => {
    if (isGameOver) {
      handleGameOverOpen();
    }
  }, [isGameOver]);

  const handleGameOverClose = () => {
    setGameOver(false);
    dispatch(roomDeckPyramidActions.emptyDeck());

    navigate("/");
    dispatch(resetGame("game window"));
  };

  const handleGameOverOpen = () => {
    setGameOver(true);
  };

  const handleValueErrorClose = () => {
    setValueError(false);
  };

  const handleValueError = () => {
    setValueError(true);
  };

  const playerTurnEnded = () => {
    try {
      let cardClicked = playerHand.find((card) => card.clicked);
      dispatch(addValueToPlayer(cardClicked.value));
    } catch (error) {
      console.log("No card selected!");
      handleValueError();
    }
  };

  return (
    <Container
      style={{ padding: "5px", maxHeight: window.innerHeight }}
      className={classes.root}
    >
      <ErrorModal open={valueError} handleClose={handleValueErrorClose}>
        A card must be clicked before ending your turn. Please try again.
      </ErrorModal>
      <GameCompletedModal open={gameOver} handleClose={handleGameOverClose} />
      <Grid container className={classes.gameBoard}>
        <GameHeader player={currentPlayer} />
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
