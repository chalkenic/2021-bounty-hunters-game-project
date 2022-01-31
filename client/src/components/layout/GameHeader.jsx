import {
  Grid,
  Typography,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import NavMenu from "../../appComponents/NavMenu";
import TutorialModal from "../game/tutorial/TutorialModal";

const useStyles = makeStyles((theme) => ({
  buttonPadding: {
    padding: "0.1rem",
  },

  textHeader: {
    fontWeight: "600 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px !important",
    },
  },

}));

const GameHeader = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={3} s={3} m={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3" className={classes.textHeader}>
              Player: {props.player.name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={7} s={8} m={9}>
        <Typography
          variant="h1"
          align="center"
          style={{ fontWeight: 600 }}
          gutterBottom
        >
          BOUNTY HUNTERS
        </Typography>
      </Grid>

      <Grid item xs={2} s={2} m={1}>
          <Grid item xs={6}>
            <div className={classes.buttonPadding}>
              <TutorialModal />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.buttonPadding}>
              <NavMenu />
            </div>
          </Grid>
      </Grid>
    </>
  );
};
export default GameHeader;
