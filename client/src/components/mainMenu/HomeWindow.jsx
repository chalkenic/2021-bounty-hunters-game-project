import React, { useState } from "react";
import SetupCreator from "../mainMenu/setup/SetupCreator";
import WelcomeSummary from "../../components/mainMenu/WelcomeSummary";
import Header from '../layout/Header';
import { Container, Grid } from "@material-ui/core";
import useStylesBase from "../../styles/StylesBase";
import { makeStyles, createStyles, Paper } from "@material-ui/core";
import SetupLobby from '../mainMenu/setup/SetupLobby';
import PlayingCard from "../Cards/GameCard";
import AppPrimaryButton from "../../appComponents/AppPrimaryButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    gridWindow: {
      maxWidth: "lg",
    },
    paper: {
      margin: theme.spacing(1),

    }
  })
);

const HomeWindow = (props) => {


  const classes = useStyles();
  const classesBase = useStylesBase();
  return (
    <Container className={classesBase.homeOverride} >
      <Grid container >
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
        <Grid item xs={1.5} />
        <AppPrimaryButton to="/game/game1">
        test
        </AppPrimaryButton>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <SetupLobby />
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
      
      </Grid>
    </Container>
  );
};
export default HomeWindow;
