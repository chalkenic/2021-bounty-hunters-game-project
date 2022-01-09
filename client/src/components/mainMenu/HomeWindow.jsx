import React from "react";
import SetupCreator from "../mainMenu/setup/SetupCreator";
import WelcomeSummary from "../../components/mainMenu/WelcomeSummary";
import Header from "../layout/Header";
import { Container, Grid } from "@material-ui/core";
import useStylesBase from "../../styles/StylesBase";
import { makeStyles, createStyles, Paper } from "@material-ui/core";
import SetupLobby from "../mainMenu/setup/SetupLobby";
import AppPrimaryButton from "../../appComponents/AppPrimaryButton";
import { useDispatch } from "react-redux";
import { gamePlayerActions } from "../../store/gamePlayers-slice";

const useStyles = makeStyles((theme) =>
  createStyles({
    gridWindow: {
      maxWidth: "lg",
    },
    paper: {
      margin: theme.spacing(1),
    },
  })
);

let newPlayers = [];

const HomeWindow = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const classesBase = useStylesBase();

  let tempNames = ["cheese", "biscuits", "crackers"];

  const onGameStart = () => {
    for (let index = 0; index < 3; index++) {
      newPlayers[index] = {
        id: index,
        name: tempNames[index],
      };
    }
    dispatch(gamePlayerActions.addPlayersToGame(newPlayers));
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
        <Grid item xs={1} />
        <AppPrimaryButton onClick={onGameStart} to="/game/game1">
          test
        </AppPrimaryButton>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <SetupLobby />
          </Paper>
        </Grid>
      </Grid>
      <Grid container></Grid>
    </Container>
  );
};
export default HomeWindow;
