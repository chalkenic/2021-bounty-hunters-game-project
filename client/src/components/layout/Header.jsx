import React from "react";
// import classes from "./Header.module.css";
import {
  Card,
  makeStyles,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#4169E1",
    position: "relative",
    display: "block",
    '& .MuiCardContent-root': {
      padding: '0',
      height: '6rem',
    },
    headerText: {
      m: '0',
    }
  },
  quote: {
    fontStyle: "italic",
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent >
        <Typography m={0} variant="header" component="h1">
          <h1 className={classes.headerText}>Bounty Hunters</h1>
        </Typography>
        <Typography m={0}variant="header" component="h3">
          <h3 className={classes.quote}>"Explore together, win as one"</h3>
        </Typography>
      </CardContent>
      {/* <header className={classes.header}>
        <h1>Bounty Hunters</h1>
        <h3 className={classes.quote}>"Explore together, win as one"</h3>
      </header> */}
    </Card>
  );
};
export default Header;
