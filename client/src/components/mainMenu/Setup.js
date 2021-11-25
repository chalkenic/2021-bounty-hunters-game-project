import React, { Fragment } from "react";
import NewGameWindow from "./NewGameWindow";
import WelcomeSummary from "./WelcomeSummary";

const Setup = (props) => {
  return (
    <Fragment>
      <WelcomeSummary />
      <NewGameWindow />
    </Fragment>
  );
};
export default Setup;
