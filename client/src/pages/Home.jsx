import React from "react";
import SetupWindow from "../components/mainMenu/setup/SetupWindow";
import WelcomeSummary from "../components/mainMenu/WelcomeSummary";
import Header from "../components/layout/Header";
import { Container, Grid } from "@material-ui/core";
import useStylesBase from '../styles/StylesBase';
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
  gridWindow: {
    maxWidth: 'lg',
  }
}))


const Home = (props) => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  return (
    <Container className={classesBase.homeOverride}>
      <Grid container spacing={1} >
        <Grid item xs={12}>
        <Header />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12}>
        <WelcomeSummary />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12}>
        <SetupWindow />
        </Grid>
      </Grid>
      
      
      
    </Container>
  );
};
export default Home;
