import { Grid } from "@material-ui/core";
import React from "react";
import useStylesBase from "../../styles/StylesBase";
import GameCard from "../Cards/GameCard";
import GameCardList from "../Cards/GameCardList";

const GameWindow = (props) => {
    const cardList = GameCardList;
    console.log(cardList.length)
  //   const classesBase = useStylesBase;
  return (
  <Grid container spacing={1}>
    {cardList.map((card) => {
    <Grid item s={12} sm={6} lg={4} key={card.id}>
      <GameCard card={card} />
    </Grid>;
  })}
  </Grid>);
};
export default GameWindow;
