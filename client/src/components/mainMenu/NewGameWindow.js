import React from "react";
import Card from "../UI/Card/Card";
import classes from "./NewGameWindow.module.css";
import SetupForm from "./SetupForm";



const NewGameWindow = (props) => {
  return (
    <section className={classes["game-setup"]}>
      <Card>
        <h1>Game Setup</h1>
        <div id = {classes['border-bottom']} />
        <SetupForm />
      </Card>
      
    </section>
  );
};
export default NewGameWindow;
