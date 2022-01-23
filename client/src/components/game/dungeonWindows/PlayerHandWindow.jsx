import React from "react";

import { Card, CardContent } from "@material-ui/core";


const PlayerHand = (props) => {

  return (
    <Card className={props.className}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};
export default PlayerHand;
