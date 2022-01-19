import { Container, Paper, Typography, List } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const GamePlayLog = () => {
  const history = useSelector((state) => state.history.gameHistory);

  console.log("history:", history);
  return (
    <Paper>
      <List style={{ maxHeight: "200", width: "100%", overflow: "auto" }}>
        {history.map((h, index) => {
          return (
            <Typography key={index} variant="body1">
              {h}
            </Typography>
          );
        })}
      </List>
    </Paper>
  );
};
export default GamePlayLog;
