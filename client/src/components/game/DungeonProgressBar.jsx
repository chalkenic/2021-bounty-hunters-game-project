import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  barContainer: {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  },
  barFill: {
    height: "100%",
    width: (props) => `${props.currentWidth}%`,
    backgroundColor: (props) => props.barBackground,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 3s ease-in-out",
  },
  barLabel: {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  },
}));

const DungeonProgressBar = (props) => {
  
  const classes = useStyles(props );

  return (
    <div className={classes.barContainer}>
      <div className={classes.barFill}>
        <span
          className={classes.barLabel}
          role="progressbar"
          aria-valuenow={`${props.completed}`}
          aria-valuemin={0}
          aria-valuemax={`${props.dungeonMax}`}
        >
          {`Completion: ${props.completed}/${props.dungeonMax}`}
        </span>
        {/* <span className={barLabel}>{`${completed}/${total}`}</span> */}
      </div>
    </div>
  );
};
export default DungeonProgressBar;
