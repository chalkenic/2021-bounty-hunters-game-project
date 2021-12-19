import { makeStyles, useTheme, withStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, LinearProgress, Typography } from "@material-ui/core";
import AppTheme from "../../styles/AppTheme";
import { progressBarActions } from "../../store/progressBar-slice";

const useStyles = makeStyles((theme, barColor) => ({
  barContainer: {
    height: 20,
    width: "98%",
    backgroundColor: "#fff",
    borderRadius: 50,
    marginLeft: 6,
    marginTop: 10,
    marginBottom: 40,
  },

  barColor: {
    backgroundColor: "red",
  },

  progressBarStyle: {
    height: 20,
    borderRadius: 10,
  },

  // barFill: {
  //   height: "100%",
  //   width: (props) => `${props.currentWidth}%`,
  //   backgroundColor: (props) => props.barBackground,
  //   borderRadius: "inherit",
  //   textAlign: "right",
  //   transition: "width 3s ease-in-out",
  // },
  // barLabel: {
  //   padding: 5,
  //   color: "white",
  //   fontWeight: "bold",
  // },

  // barColor: {
  //   color: "#b71c1c",
  // },
}));

const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 20,
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  barColorPrimary: {
    borderRadius: 10,
    backgroundColor: "red",
  },
}))(LinearProgress);

const DungeonProgressBar = (props) => {
  const barStyles = (props) => ({
    colorPrimary: {
      backgroundColor: "red",
    },
    barColorPrimary: {
      backgroundColor: "green",
    },
  });
  const theme = useTheme(AppTheme);
  const [barColor, setBarColor] = useState(
    theme.palette.progressBar.lowProgress
  );
  const progress = useSelector((state) => state.progressBar.progress);
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const normalize = (value) => ((value - 0) * 100) / (props.dungeonMax - 0);

  useEffect(() => {
    if (progress >= props.dungeonMax) {
      dispatch(progressBarActions.resetProgress());
    }
  }, [progress]);

  // variable converts integer inputs from cards into their % variant for inclusion
  // into progress bar.

  return (
    <div>
      <Typography>
        Floor progress: {progress} /{props.dungeonMax}
      </Typography>
      <div className={classes.barContainer}>
        <BorderLinearProgress
          variant="determinate"
          value={normalize(progress)}
        />
      </div>
    </div>
  );
};
export default DungeonProgressBar;
