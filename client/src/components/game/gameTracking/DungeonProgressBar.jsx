import { makeStyles, useTheme, withStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress, Typography } from "@material-ui/core";
import AppTheme from "../../../styles/AppTheme";
import { progressBarActions } from "../../../store/slices/progressBar-slice";
import { roomDeckPyramidActions } from "../../../store/slices/roomDeck_Pyramid-slice";

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
  const progress = useSelector((state) => state.progressBar.progress);
  let currentRoomCard = useSelector((state)=> state.pyramidRoomDeck.currentCard)

  const classes = useStyles(props);
  const dispatch = useDispatch();

  // variable converts integer inputs from cards into their % variant for inclusion
  // into progress bar.
  const normalize = (value) => ((value - 0) * 100) / (currentRoomCard.health - 0);

  useEffect(() => {
    if (progress >= currentRoomCard.health) {
      dispatch(progressBarActions.resetProgress());
    }
  }, [progress]);

  return (
    <div>
      <Typography>
        Floor progress: {progress} /{currentRoomCard.health}
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
