import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Box, LinearProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  energyContainer: {
    position: "relative",
    display: "inline-flex",
    width: "100%",
  },

  energyBorder: {
    border: "1px solid grey",
    borderRadius: 5,
    padding: "2px",
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

// Custom MUI component with different color values.
const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 15,
    width: "100%",
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "black",
  },
  barColorPrimary: {
    borderRadius: 5,
    backgroundColor: "green",
  },
}))(LinearProgress);

// Custom MUI component with different text style at root.
const WhiteTypography = withStyles(() => ({
  root: {
    color: "white",
  },
}))(Typography);

// Handle player's personal energy within team window.
const PlayerEnergyBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.energyBorder}>
      <Typography variant="inherit">Energy</Typography>
      <Box className={classes.energyContainer}>
        <BorderLinearProgress
          className={classes.energyBar}
          variant="determinate"
          value={props.energyValue}
        />
        <Box className={classes.energyTextBox}>
          <WhiteTypography variant="body2">{props.energyValue}</WhiteTypography>
        </Box>
      </Box>
    </div>
  );
};
export default PlayerEnergyBar;
