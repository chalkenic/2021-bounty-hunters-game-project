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

const Header = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent >
        <Typography m={0} variant="body2" component="h1" className={classes.headerText}>
          Bounty Hunters
        </Typography>
        <Typography m={0}variant="body2" component="h3" className={classes.quote}>
          "Explore together, win as one"
        </Typography>
        <div>
          <img src={`${process.env.PUBLIC_URL}/static/frontPage_banner/.png`}/>
        </div>
      </CardContent>
      {/* <header className={classes.header}>
        <h1>Bounty Hunters</h1>
        <h3 className={classes.quote}>"Explore together, win as one"</h3>
      </header> */}
    </Card>
  );
};
export default Header;
