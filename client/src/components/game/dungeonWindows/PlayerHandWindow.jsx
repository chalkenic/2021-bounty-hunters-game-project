import React from "react";

import { Card, CardContent } from "@material-ui/core";


const PlayerHand = (props) => {

  return (
    <Card className={props.className} style={{padding: '0 20px'}}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};
export default PlayerHand;
