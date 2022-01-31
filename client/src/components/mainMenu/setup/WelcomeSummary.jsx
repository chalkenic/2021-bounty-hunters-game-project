import React from "react";

import {
  Card,
  CardContent,
  Typography,
  useTheme,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import useStylesBase from "../../../styles/StylesBase";
import AppTheme from "../../../styles/AppTheme";

const useStyles = makeStyles((theme) =>
  createStyles({
    welcomeHeader: {
      fontWeight: "600 !important",
      fontSize: "30px !important",
    },
    welcomeText: {
      fontWeight: "400 !important",
      fontSize: "22px !important",
    },
  })
);

const WelcomeSummary = () => {
  const classes = useStyles();
  const theme = useTheme(AppTheme);
  // const classes = useStyles();
  const classesBase = useStylesBase();
  return (
    <Card className={classesBase.homeGrid}>
      <CardContent>
        <Typography
          style={{ color: theme.palette.text.primary }}
          gutterBottom
          variant="h1"
          className={classes.welcomeHeader}
        >
          Welcome to Bounty Hunters
        </Typography>
        <Typography
          style={{ color: theme.palette.text.primary }}
          variant="h1"
          color="textSecondary"
          className={classes.welcomeText}
        >
          In this game, you will work together alongside other players to
          explore rooms of a chosen scenario.
        </Typography>
        <Typography
          style={{ color: theme.palette.text.primary }}
          variant="h1"
          color="textSecondary"
          className={classes.welcomeText}
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
