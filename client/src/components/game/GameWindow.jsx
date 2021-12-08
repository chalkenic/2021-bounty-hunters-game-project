import {
  // Avatar,
  Card,
  // CardContent,
  // CardHeader,
  CardMedia,
  Container,
  Grid,
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
import { flexbox } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  handDimensions: {
    justifyContent: "center",
    width: "100%",
    margin: 50,

    // flex: '1 0 auto'
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

  // gameWindow: {
  //   display: "flex",
  //   flexDirection: 'row'
  // },
  playerCardHand: {
    // display: "flex",
    flexFlow: "1 0 auto",
  },
}));

const testData = [
  { bgColor: "#6a1b9a", completed: 60 },
  { bgColor: "#00695c", completed: 30 },
  { bgColor: "#ef6c00", completed: 53 },
];

const GameWindow = (props) => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const dungeonMax = 200;
  const [completed, setCompleted] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [cardChoice, setCardChoice] = useState(0)

  // const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setBarWidth((barWidth + cardChoice));

  }, [cardChoice]);

  useEffect(() => {
    setBarWidth((completed / dungeonMax) * 100);
  }, [completed]);

  const handleCardClick = (props) => {
    setCardChoice(props);
  };

  return (
    <Container className={clsx(classesBase.fullWidth, classes.gameWindow)}>
      {/* <Grid container xs={12}></Grid> */}
      <Grid item xs={11}>
        <DungeonProgressBar
          barBackground={testData[0].bgColor}
          completed={completed}
          dungeonMax={dungeonMax}
          currentWidth={barWidth}
        />
      </Grid>
      <Grid item xs={11} className={classes.playerCardHand}>
        <PlayerHand className={classes.handDimensions}>
          <GameCardList onClick={handleCardClick} />
        </PlayerHand>
        {/* <Card className={classes.root}>
            <CardHeader

              title={"Card 5"}
              subheader={"test card??"}
            />

            <CardMedia
              className={classes.media}
              alt="Does this show????"
              title="Card 5"
            >
              <img
                src={`${process.env.PUBLIC_URL}/static/playerCardImages/${img}.svg`}
                className={classes.gameCard}
                alt={'test'}
              />

            </CardMedia>
          </Card> */}
      </Grid>
      {/* <Grid container></Grid> */}
    </Container>
  );
};
export default GameWindow;
