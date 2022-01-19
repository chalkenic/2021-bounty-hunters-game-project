import { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
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
import { allPlayerActions } from "../../store/slices/allPlayers-slice";
import {
  rollHitChance,
  checkRoundEnded,
  shufflePlayers,
} from "../helpers/gameHelpers";

import { increaseProgress } from "../../store/actions/progressActions";
import {
  submitRoomCards,
  getRoomCards,
} from "../../store/actions/roomDeckActions";

import { addValueToPlayer } from "../../store/actions/playerActions";

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
  const players = useSelector((state) => state.allPlayers.players);
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const progress = useSelector((state) => state.progressBar.value);
  const currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );

  // const turnEnded = useSelector((state) => state.allPlayers.turnEnded);
  const dungeonDeck = useSelector((state) => state.pyramidRoomDeck.dungeonDeck);

  const playerDeck = useSelector((state) => state.playerDeck.dungeonCards);

  if (playerHand === undefined) {
    dispatch(playerDeckActions.setUpHands());
  }

  // useEffect(() => {
  //   if (turnEnded) {
  //     handleAllTurnsEnded();
  //   }
  // }, [turnEnded]);

  // useEffect(() => {}, [progress]);

  const playerTurnEnded = () => {
    let cardClicked = playerHand.find((card) => card.clicked);
    // dispatch(requestId());
    dispatch(addValueToPlayer(cardClicked.value));
    // console.log("id sourced:", playerId);
    // dispatch(
    //   allPlayerActions.assignCardValue({
    //     card: cardClicked,
    //     // player: playerId,
    //   })
    // );
  };

  if (getRoomCards().length === 0) {
    console.log("am i firing?");
    // console.log('dispatch submitRoomCards B', dungeonDeck)
    dispatch(submitRoomCards(dungeonDeck));
  }

  // console.log("current card:", currentRoomCard);

  // dispatch(submitRoomCards(dungeonDeck));
  // const handleAllTurnsEnded = () => {
  //   // dispatch(
  //   //   progressBarActions.increaseProgress(
  //   //     playerHand.find((card) => card.clicked)
  //   //   )
  //   // );
  //   for (let p = 0; p < players.length; p++) {
  //     // dispatch(increaseProgress(players[p]));
  //     // console.log("what am i", progress);
  //     // console.log(currentRoomCard.health);

  //     console.log(currentRoomCard.health, progress);

  //     if (checkRoundEnded(currentRoomCard.health, progress)) {
  //       if (
  //         currentRoomCard.target.includes(p) &&
  //         rollHitChance(currentRoomCard.hitChance)
  //       ) {
  //         dispatch(
  //           allPlayerActions.reducePlayerEnergy({
  //             id: players[p].id,
  //             damage: currentRoomCard.damage,
  //           })
  //         );
  //       }
  //       dispatch(allPlayerActions.resetPlayerTurn(players[p]));
  //       dispatch(allPlayerActions.resetTurn());
  //     } else {
  //       console.log("game over!");
  //     }

  //     dispatch(
  //       playerDeckActions.dealNewCard(playerHand.find((card) => card.clicked))
  //     );

  //     // dispatch();
  //   }

  //   // dispatch(increaseProgress(playerHand.find((card) => card.clicked)));
  //   // if (checkRoundEnded(currentRoomCard.health, progress)) {
  //   //   for (let idx = 0; idx < players.length; idx++) {
  //   //     // console.log("checking player", players[idx]);
  //   //     // console.log("targets of card:", currentRoomCard.target);
  //   //     if (
  //   //       currentRoomCard.target.includes(idx) &&
  //   //       rollHitChance(currentRoomCard.hitChance)
  //   //     ) {
  //   //       // console.log("player", players[idx], "taking damage!");
  //   //       dispatch(
  //   //         allPlayerActions.reducePlayerEnergy({
  //   //           id: players[idx].id,
  //   //           damage: currentRoomCard.damage,
  //   //         })
  //   //       );
  //   //     }
  //   //   }
  //   // }
  //   // dispatch(
  //   //   playerDeckActions.dealNewCard(playerHand.find((card) => card.clicked))
  //   // );
  //   handlePlayerOrder();
  // };

  const handlePlayerOrder = () => {
    let shuffledPlayers = shufflePlayers(players);
    shuffledPlayers.map((player, index) =>
      dispatch(allPlayerActions.addTurnToPlayer({ id: player.id, turn: index }))
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
              <Button variant="contained" onClick={() => playerTurnEnded()}>
                End turn
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
