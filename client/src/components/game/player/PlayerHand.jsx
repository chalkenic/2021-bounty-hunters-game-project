import React, {useState} from "react";

import { makeStyles } from "@material-ui/styles";
import { Card, CardContent } from "@material-ui/core";
import useStylesBase from "../../../styles/StylesBase";


const PlayerHand = (props) => {

  return (
    <Card className={props.className} style={{padding: '0 20px'}}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};
export default PlayerHand;
