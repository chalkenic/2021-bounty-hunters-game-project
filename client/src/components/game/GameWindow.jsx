import {
  // Avatar,
  Card,
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
// import GameCard from "../cards/GameCard";
import GameCardList from "../cards/GameCardList";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
// import { maxWidth } from "@mui/system";
// import { MoreVertRounded } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import PlayerHand from "./player/PlayerHand";
import DungeonProgressBar from "./DungeonProgressBar";
import clsx from "clsx";
import gameStore from "../../store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import PlayerList from "./player/PlayerList";
import AppTheme from "../../styles/AppTheme";

const useStyles = makeStyles((theme) => ({
  handWindow: {
    // justifyContent: "center",
    // width: "50%",
    // marginLeft: 10,
    // flex: '1 0 auto'
  },

  root: {
    padding: "10px",
  },

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
  const classes = useStyles();
  const dungeonMax = 200;
  const [completed, setCompleted] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [cardChoice, setCardChoice] = useState(0);

  // const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setBarWidth(barWidth + cardChoice);
  }, [cardChoice]);

  useEffect(() => {
    setBarWidth((completed / dungeonMax) * 100);
  }, [completed]);

  const handleCardClick = (props) => {
    setCardChoice(props);
    console.log(cardChoice);
  };

  return (
    <Container>
      <Grid container className={classes.gameBoard}>
        <Grid item xs={12}>
          <DungeonProgressBar
            barBackground={testData[0].bgColor}
            completed={completed}
            dungeonMax={dungeonMax}
            currentWidth={barWidth}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2} classes={classes.playerWindow}>
          <PlayerList />
        </Grid>

        <Grid container item xs={8} sm={8} md={8}>
          <Grid container item style={{ padding: "0 5px" }} item xs={12}>
            <Paper style={{ height: "195%", width: "100%" }}>
              <Paper
                style={{ height: "50%", width: "50%", backgroundColor: "red" }}
              ></Paper>
            </Paper>
          </Grid>
          <Grid
            container
            alignItems="flex-end"
            justifyContent="center"
            item
            xs={12}
            style={{ padding: "0 5px", width: "100%" }}
          >
            <PlayerHand className={classes.handWindow}>
              <GameCardList onClick={handleCardClick} />
            </PlayerHand>
          </Grid>
        </Grid>
        <Grid xs={2} style={{ padding: "0 5px" }}>
          <Paper style={{ height: "100%", width: "100%" }}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default GameWindow;
