import React from "react";
import classes from "./WelcomeSummary.module.css";

import { Card, makeStyles, CardContent, Typography } from "@material-ui/core";
import useStylesBase from "../../styles/StylesBase";

const useStyles = makeStyles({
  root: {
    minWidth: "100",
    position: 'relative',
    top: 110
  },
});

const WelcomeSummary = () => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  return (
    <Card className={ classesBase.homeGrid}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Welcome to Bounty Hunters
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            In this game, you will work together alongside other players to
            explore rooms of a chosen scenario.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            However, only the player who completes each room exploration first
            will get the treasure!
        </Typography>
      </CardContent>
    </Card>
    // <section className={classes["summary-window"]}>
    //   <h2>Welcome to Bounty Hunters</h2>

    // </section>
  );
};
export default WelcomeSummary;
