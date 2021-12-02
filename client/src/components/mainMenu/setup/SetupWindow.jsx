// import Card from "../../UI/Card/Card";
import cssClasses from "./SetupWindow.module.css";
import React from "react";
import { green } from "@material-ui/core/colors";
import {
  makeStyles,
  Grid,
  CardActions,
  createStyles,
  CardContent,
  Typography,
  Card,
  IconButton,
  Divider,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import DeckDropdown from "./DeckDropdown";
import PlayerCount from "./PlayerCount";
import useStylesBase from "../../../styles/StylesBase";
import AppPrimaryButton from "../../../appComponents/AppPrimaryButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100",
      position: "relative",
      top: 120,
    },
    lineSeparate: {
      borderBottom: "2px solid #fff",
      marginBottom: "1%",
      marginLeft: "12.5%",
      marginRight: "12.5%",
    },
    blackButton: {
      color: "#fff",
      backgroundColor: "#fff",

      "&:hover": {
        backgroundColor: green[500],
      },
    },
  })
);

const test = (props) => {
  console.log("Hi");
};

const SetupWindow = (props) => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  return (
    <Card className={classesBase.homeGrid}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Setup
        </Typography>
        <Divider className={classes.lineSeparate} />
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <DeckDropdown />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <PlayerCount />
          </Grid>
        </Grid>
        <AppPrimaryButton onClick={test} className={classes.blackButton}>
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
        </AppPrimaryButton>
      </CardContent>
    </Card>
    // </section>
  );
};
export default SetupWindow;
