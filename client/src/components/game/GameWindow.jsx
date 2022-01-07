import {
  // Avatar,
  Card,
  CardContent,
  // CardContent,
  // CardHeader,
  CardMedia,
  Container,
  createTheme,
  Grid,
  Paper,
  // IconButton,
  // SvgIcon,
  // Typography,
} from "@material-ui/core";
import useStylesBase from "../../styles/StylesBase";
import GameCardList from "./player/PlayerHand";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import PlayerHand from "./player/PlayerHand";
import DungeonProgressBar from "./gameTracking/DungeonProgressBar";
import clsx from "clsx";
import gameStore from "../../store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import PlayerTeamWindow from "./dungeonWindows/PlayerTeamWindow";
import AppTheme from "../../styles/AppTheme";
import GamePlayLog from "./gameLog/GamePlayLog";
import CardDeckWindow from "./dungeonWindows/CardDeckWindow";
import GameplayWindow from "./dungeonWindows/GameplayWindow";
import PlayerCard from "../cards/PlayerCard";
import PlayerHandWindow from "./dungeonWindows/PlayerHandWindow";
import { playerDeckActions } from "../../store/playerDeck-slice";

const useStyles = makeStyles((theme) => ({
  handWindow: {
    // justifyContent: "center",
    // width: "50%",
    // marginLeft: 10,
    // flex: '1 0 auto'
  },

  root: {},

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

const theme = createTheme({
  breakpoints: {
    values: {
      small: 1080,
    },
  },
});

const testData = [
  { bgColor: "#6a1b9a", completed: 60 },
  { bgColor: "#00695c", completed: 30 },
  { bgColor: "#ef6c00", completed: 53 },
];

const GameWindow = (props) => {
  // const dispatch = useDispatch();

  const classes = useStyles();
  const dungeonMax = 200;
  const [completed, setCompleted] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [cardChoice, setCardChoice] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // useEffect(() => {
  //   function handleResizeEvent() {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   }
  //   window.addEventListener("resize", handleResizeEvent);
  // }, []);

  // const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setBarWidth(barWidth + cardChoice);
  }, [cardChoice]);

  useEffect(() => {
    setBarWidth((completed / dungeonMax) * 100);
  }, [completed]);

  const handleCardClick = (props) => {
    setCardChoice(props);
    console.log('card choice: ' + cardChoice);
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
          <DungeonProgressBar
            completed={completed}
            dungeonMax={dungeonMax}
            currentWidth={barWidth}
          />
        </Grid>
        <Grid item xs={2}>
          <Grid item xs={12}>
            Dungeon floors
          </Grid>
          <Grid item xs={12}>
            6/8
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
            {/* <Paper style={{ height: "195%", width: "100%" }}></Paper> */}
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
              <PlayerHand onClick={handleCardClick} />
            </PlayerHandWindow>
          </Grid>
        </Grid>
        <Grid xs={2} style={{ padding: "0 5px" }}>
          {/* <GamePlayLog /> */}
          <CardDeckWindow />
        </Grid>
      </Grid>
    </Container>
  );
};
export default GameWindow;
