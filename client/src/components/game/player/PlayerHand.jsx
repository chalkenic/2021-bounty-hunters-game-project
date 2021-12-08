import React, {useState} from "react";

import { makeStyles } from "@material-ui/styles";
import { Card, CardContent } from "@material-ui/core";
import useStylesBase from "../../../styles/StylesBase";

const useStyles = makeStyles((theme) => ({
  playerHand: {
    margin: "auto",
    // paddingBottom: "5%",
    paddingTop: "5",
    // left: "45%",
    // top: "70%",
  },
}));

const PlayerHand = (props) => {
  const [cardChosen, setCardChosen] = useState(false);

  const cardSelectedHandler = () => {
    setCardChosen(true);
  };

  const cardDeselectedHandler = () => {
    setCardChosen(false);
  };

  const classes = useStyles();
  const classesBase = useStylesBase();

  return (
    <Card className={props.className} xs={12}>
      <CardContent className={classes.playerHand}>{props.children}</CardContent>
    </Card>
  );
};
export default PlayerHand;
