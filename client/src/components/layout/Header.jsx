import React, { Fragment } from "react";
// import classes from "./Header.module.css";
import {
  makeStyles,
  Typography,
} from "@material-ui/core";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "0 1",

  },

  headerText: {
    backgroundColor: "#4169E1",
    position: "fixed",
    display: "block",
    width: "100%",
    alignItems: "center",
    height: "5rem",
    zIndex: "2",
    transform: "rotateZ(-1deg) ",
  },
  quote: {
    fontStyle: "italic",
  },

  imgContainer: {
    backgroundColor: "#4169E1",
    paddingTop: "5rem",
    width: "100%",
    height: "16rem",
    zIndex: "0",
    overflow: "hidden",
  },
  imageData: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    zIndex: "2",
    transform: "rotateZ(-1deg) ",
  },
});

const Header = () => {
  const classes = useStyles();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Fragment >
      {/* <CardContent> */}
      <ThemeProvider theme={theme}>
        <Typography variant="h1"className={classes.headerText}>
          Bounty Hunters
          <Typography component="h3"  className={classes.quote}>
            "Explore together, win as one"
          </Typography>
        </Typography>
      </ThemeProvider>

      {/* <CardMedia
        className={classes.headerMedia}
        // image={`${process.env.PUBLIC_URL}/static/frontPage_banner.png`}
        // alt="frontPage banner"
      > */}
      <div className={[[classes.imgContainer]]}>
        <img
          className={[classes.imageData]}
          src={`${process.env.PUBLIC_URL}/static/frontPage_banner.png`}
        />
      </div>
      {/* </CardMedia> */}
      {/* </CardContent> */}
      {/* <header className={classes.header}>
        <h1>Bounty Hunters</h1>
        <h3 className={classes.quote}>"Explore together, win as one"</h3>
      </header> */}
    </Fragment>
  );
};
export default Header;
