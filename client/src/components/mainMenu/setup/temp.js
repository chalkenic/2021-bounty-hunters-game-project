// import React, { useRef } from "react";
// import Input from "../UI/Input/Input";
import { Container, Grid, Paper, makeStyles, IconButton } from "@material-ui/core";
import DeckDropdown from "./DeckDropdown";
// import cssClasses from "./SetupForm.module.css";
import PlayerCount from "./PlayerCount";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    marginTop: 20,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  nextPaper: {
    height: 80,
    marginTop: 20,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  buttonGrid: {
    display: "relative",
    justifyContent: "center",
  },

  // grid_column: {
  //   direction: "column",
  //   justifyContext: "flex-start",
  //   spacing: 3,
  // },
}));

const SetupForm = (props) => {
  // const ref = useRef(1);
  const classes = useStyles();

  // const testValue = ref.current.value;

  return (
    <div className="root">
      {/* <Container className="form"> */}
      {/* <Input ref={testValue} label="game" input /> */}

      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <DeckDropdown />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <PlayerCount />
          </Paper>
        </Grid>
      </Grid>

      <Grid className={classes.buttonGrid}>
        <Grid item xs={4}>
          <Paper className={classes.nextPaper}>
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
};
export default SetupForm;


    // <section className={classes["game-setup"]}>
      {/* <Card></Card>
        <h1>Game Setup</h1>
        <div id = {classes['border-bottom']} />
        <SetupForm />
      </Card> */}