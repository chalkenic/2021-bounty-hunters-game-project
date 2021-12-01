// import Card from "../../UI/Card/Card";
import cssClasses from "./SetupWindow.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Card, IconButton } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DeckDropdown from "./DeckDropdown";
import PlayerCount from "./PlayerCount";
import useStylesBase from "../../../styles/StylesBase";
const useStyles = makeStyles({
  root: {
    width: '100',
    position: 'relative',
    top: 120
  },
  lineSeparate: {
    paddingTop: 10,
  },

});

const SetupWindow = (props) => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  return (
    <Card className={classesBase.homeGrid}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Setup
        </Typography>
        <div id={cssClasses["border-bottom"]} />*
        <Grid container>
          <Grid item xs={12} sm={6} md={4}><DeckDropdown /></Grid>
          <Grid item xs={12} sm={6} md={8}><PlayerCount /></Grid>
        </Grid>
      </CardContent>
      <CardActions>
      <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
      </CardActions>
    </Card>
    // </section>
  );
};
export default SetupWindow;
