import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

/*
Re-usable button component that contains a default style if none provided.
*/

// Default style if not one provided on component call.
const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      borderRadius: 5,
      backgroundColor: theme.palette.common.white,
      height: 40,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  })
);

// Pass Button component with optional parameters. Button can convert to link if designated.
const AppPrimaryButton = ({ className, to, onClick, children }) => {
  const classes = useStyles();
  return (
    <Button
      component={to ? Link : Button}
      to={to}
      variant="contained"
      className={clsx(classes.button, className)}
      onClick={onClick}
    >
       {children}
    </Button>
  );
};
export default AppPrimaryButton;
