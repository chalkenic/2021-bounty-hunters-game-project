import React from "react";
import classes from "./WelcomeSummary.module.css";

const WelcomeSummary = (props) => {
  return (
    <section className={classes["summary-window"]}>
      <h2>Welcome to Bounty Hunters</h2>
      <p>
        In this game, you will work together alongside other players to explore
        rooms of a chosen scenario.
      </p>
      <p>
        However, only the player who completes each room exploration first will
        get the treasure!
      </p>
    </section>
  );
};
export default WelcomeSummary;
