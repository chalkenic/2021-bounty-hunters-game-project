import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Box, LinearProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  energyContainer: {
    position: "relative",
    display: "inline-flex",
    width: "100%",
  },

  energyTextBox: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 15,
    width: "100%",
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  barColorPrimary: {
    borderRadius: 5,
    backgroundColor: "green",
  },
}))(LinearProgress);

const WhiteTypography = withStyles(() => ({
  root: {
    color: "white",
  },
}))(Typography);

const PlayerEnergyBar = (props) => {
  const classes = useStyles(props);
  return (
    <Box className={classes.energyContainer}>
      <BorderLinearProgress
        className={classes.energyBar}
        variant="determinate"
        value="100"
      />
      <Box className={classes.energyTextBox}>
        <WhiteTypography variant="body2">100</WhiteTypography>
      </Box>
    </Box>
  );
};
export default PlayerEnergyBar;
