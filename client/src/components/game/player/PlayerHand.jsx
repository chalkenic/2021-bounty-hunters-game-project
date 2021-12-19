import React, {useState} from "react";

import { makeStyles } from "@material-ui/styles";
import { Card, CardContent } from "@material-ui/core";
import useStylesBase from "../../../styles/StylesBase";

const useStyles = makeStyles((theme) => ({

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
    <Card className={props.className} style={{padding: '0 10px'}}>
      <CardContent className={classes.playerHand, classesBase.cardLastChildOverride}>{props.children}</CardContent>
    </Card>
  );
};
export default PlayerHand;
