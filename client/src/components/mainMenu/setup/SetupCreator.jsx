// import Card from "../../UI/Card/Card";
import React from "react";
import { green } from "@material-ui/core/colors";
import {
  makeStyles,
  Grid,
  createStyles,
  CardContent,
  Typography,
  Card,
  Divider,
} from "@material-ui/core";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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

const SetupCreator = () => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  return (
    <Card className={classesBase.homeGrid}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Game Setup
        </Typography>
        <Divider className={classes.lineSeparate} />
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <DeckDropdown />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    // </section>
  );
};
export default SetupCreator;
