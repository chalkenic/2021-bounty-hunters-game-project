import React, { Fragment } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bounty Hunters</h1>
        <h3 className={classes.quote}>"Explore together, win as one"</h3>
        
      </header>

      
      
    </Fragment>
  );
};
export default Header;
