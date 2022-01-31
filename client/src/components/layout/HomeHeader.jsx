import React, { Fragment } from "react";
// import classes from "./Header.module.css";
import { makeStyles, Typography } from "@material-ui/core";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "0 1",
  },

  headerText: {
    backgroundColor: "#4169E1",
    position: "sticky",
    display: "block",
    width: "100%",
    alignItems: "center",
    height: "5rem",
    transform: "rotateZ(-1deg) ",
  },
  quote: {
    color: "#000080",
    width: "100%",
    display: "relative",
    fontStyle: "italic",
    position: "relative",
    alignItems: "center",
    fontSize: "30px !important",
    fontWeight: '400 !important'
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
    display: "relative",
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
    <Fragment>
      {/* <CardContent> */}
      <ThemeProvider theme={theme}>
        <Typography variant="h1" className={classes.headerText}>
          Bounty Hunters
        </Typography>
        <Typography variant="h1" className={classes.quote}>
          "Explore together, win as one"
        </Typography>
      </ThemeProvider>
      <div className={[[classes.imgContainer]]}>
        <img
          className={[classes.imageData]}
          src={`${process.env.PUBLIC_URL}/static/frontPage_banner.png`}
          alt="Bounty Hunters Front page Banner"
        />
      </div>
    </Fragment>
  );
};
export default Header;
