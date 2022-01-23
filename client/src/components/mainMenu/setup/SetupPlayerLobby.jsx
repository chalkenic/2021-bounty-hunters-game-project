import React, { useState } from "react";
import AppPrimaryButton from "../../../appComponents/AppPrimaryButton";
import {
  makeStyles,
  createStyles,
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  TextField,
  Container,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import useStylesBase from "../../../styles/StylesBase";
import SetupPlayerList from "./SetupPlayerList";
import { setCurrentPlayerName } from "../../../store/slices/currentPlayer-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    headerSeparate: {
      borderBottom: "2px solid #fff",
      marginBottom: "1%",
      marginLeft: "12.5%",
      marginRight: "12.5%",
    },

    buttonSeparator: {
      borderTop: "5px solid #fff",
      marginTop: "3%",
      marginBottom: "5%",
      marginLeft: "12.5%",
      marginRight: "12.5%",
    },
    lineSeparate: {
      borderBottom: "2px solid #fff",
      marginBottom: "1%",
      marginLeft: "25%",
      marginRight: "25%",
    },
    blackButton: {
      color: "#fff",
      backgroundColor: "#fff",

      "&:hover": {
        backgroundColor: red[500],
      },
    },
    codeCardContent: {
      padding: 20,
    },
    codeCard: {
      padding: 20,
      display: "inline-block",
    },

    buttonStartGame: {
      backgroundColor: "green !important",
      color: "white",
      fontWeight: "bolder",
      maxWidth: "200px",
      "&:hover": {
        backgroundColor: `${theme.palette.primary.dark} !important`,
      },
    },

    buttonResetGame: {
      backgroundColor: "orange !important",
      color: "black",
      fontWeight: "bolder",
      maxWidth: "200px",
      "&:hover": {
        backgroundColor: `${theme.palette.primary.dark} !important`,
      },
    },
  })
);

const SetupLobby = (props) => {
  const submitNameHandler = (e) => {
    setPlayerName(e);
  };
  const dispatch = useDispatch();
  const classes = useStyles();
  const classesBase = useStylesBase();
  const [playerName, setPlayerName] = useState("");
  let [buttonDisabled, setButtonDisabled] = useState(false);

  function onClickReset() {
    props.onClickReset();
    setButtonDisabled = true;
  }

  function onClickSubmit() {
    setButtonDisabled = false;
    dispatch(setCurrentPlayerName(playerName));
  }

  const players = useSelector((state) => state.allPlayers.players);

  return (
    <Container className={classesBase.homeGrid}>
      <CardContent>
        <Grid container>
          <Grid xs={6}>
            <AppPrimaryButton
              className={classes.buttonResetGame}
              onClick={onClickReset}
            >
              reset players
            </AppPrimaryButton>
          </Grid>
          <Grid item xs={6}>
            <AppPrimaryButton
              className={classes.buttonStartGame}
              onClick={props.onClickStart}
              to="/game"
              buttonDisabled={buttonDisabled}
            >
              Begin Game
            </AppPrimaryButton>
          </Grid>
        </Grid>
        <Divider className={classes.buttonSeparator} />

        <Typography variant="h5" component="h2">
          Lobby
        </Typography>
        <Divider className={classes.headerSeparate} />
        <Grid container>
          <Grid item xs={4} sm={4} md={4}>
            <Typography variant="h6" component="h4">
              New Player
            </Typography>
            <Divider className={classes.lineSeparate} />
            <TextField
              value={playerName}
              onChange={(e) => submitNameHandler(e.target.value)}
            />

            <div className={classes.codeCard}>
              <AppPrimaryButton onClick={onClickSubmit}>
                Submit Name
              </AppPrimaryButton>
            </div>
          </Grid>
          <Grid
            item
            xs={8}
            sm={8}
            md={8}
            style={{ justifyContent: "flex-end" }}
          >
            <Typography variant="h6" component="h4">
              Current players
            </Typography>
            <Divider className={classes.headerSeparate} />
            <SetupPlayerList />
          </Grid>
        </Grid>
      </CardContent>
    </Container>
  );
};

export default SetupLobby;