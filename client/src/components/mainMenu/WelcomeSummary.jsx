import React from "react";

import { Card, CardContent, Typography, useTheme } from "@material-ui/core";
import useStylesBase from "../../styles/StylesBase";
import AppTheme from "../../styles/AppTheme";

const WelcomeSummary = () => {
  const theme = useTheme(AppTheme);
  // const classes = useStyles();
  const classesBase = useStylesBase();
  return (
    <Card className={classesBase.homeGrid}>
      <CardContent>
        <Typography
          style={{ color: theme.palette.text.primary }}
          gutterBottom
          variant="h4"
          // component="h2"
        >
          Welcome to Bounty Hunters
        </Typography>
        <Typography
          style={{ color: theme.palette.text.primary }}
          variant="h5"
          color="textSecondary"
          // component="p"
        >
          In this game, you will work together alongside other players to
          explore rooms of a chosen scenario.
        </Typography>
        <Typography
          style={{ color: theme.palette.text.primary }}
          variant="h5"
          color="textSecondary"
        >
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
