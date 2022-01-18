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
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import useStylesBase from "../../../styles/StylesBase";
import SetupPlayerList from "./SetupPlayerList";
import { setCurrentPlayerName } from "../../../store/slices/currentPlayer-slice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    headerSeparate: {
      borderBottom: "2px solid #fff",
      marginBottom: "1%",
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
      padding: 0,
    },
    codeCard: {
      padding: 0,
      border: "1px solid #fff",
      display: "inline-block",
      "& .MuiCardContent-root:last-child": {
        paddingBottom: 0,
      },
    },
  })
);

const SetupLobby = () => {
  const submitNameHandler = (e) => {
    setPlayerName(e);
  };

  const [playerName, setPlayerName] = useState("");

  const dispatch = useDispatch();
  const classes = useStyles();
  const classesBase = useStylesBase();
  return (
    <Card className={classesBase.homeGrid}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Lobby
        </Typography>
        <Divider className={classes.headerSeparate} />
        <Grid container>
          <Grid item xs={5} sm={5} md={4}>
            <TextField
              value={playerName}
              onChange={(e) => submitNameHandler(e.target.value)}
            />

            <AppPrimaryButton
              onClick={() => {
                dispatch(setCurrentPlayerName(playerName));
              }}
            >
              Submit Name
            </AppPrimaryButton>
            <SetupPlayerList />
            <Divider className={classes.lineSeparate} />
          </Grid>
          <Grid item xs={1} sm={1} md={2}></Grid>
          <Grid
            item
            xs={5}
            sm={5}
            md={4}
            style={{ justifyContent: "flex-end" }}
          >
            <Typography variant="h6" component="h4">
              Invite Code
            </Typography>
            <Card className={classes.codeCard}>
              <CardContent className={classes.codeCard}>
                <Typography>CODE: </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <AppPrimaryButton className={classes.blackButton}>
          {/* <IconButton>
            <ArrowBackIosIcon />
          </IconButton> */}
        </AppPrimaryButton>
      </CardContent>
    </Card>
  );
};

export default SetupLobby;
