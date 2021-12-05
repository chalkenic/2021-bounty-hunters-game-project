import { Grid } from "@material-ui/core";
import React from "react";

const PlayingCard = (card) => {
  var id = card.id;
  var cardName = card.cardName;
  var height = card.height;
  var src = card.src;

  return <img src={src} height={height} />;
};
export default PlayingCard;
