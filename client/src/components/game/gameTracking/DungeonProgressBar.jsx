import { makeStyles, withStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { LinearProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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

// Handle progress of room from player card choices.
const DungeonProgressBar = (props) => {
  const progress = useSelector((state) => state.progressBar.value);
  let currentRoomCard = useSelector(
    (state) => state.pyramidRoomDeck.currentCard
  );

  const classes = useStyles(props);

  // variable converts integer inputs from cards into their % variant for inclusion
  // into progress bar.

  const normalize = (value) =>
    ((value - 0) * 100) /
    (currentRoomCard && currentRoomCard.health
      ? currentRoomCard.health
      : 0 - 0);

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
