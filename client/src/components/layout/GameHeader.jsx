import {
  Grid,
  Typography,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import NavMenu from "../../appComponents/NavMenu";
import TutorialModal from "../game/tutorial/TutorialModal";

const useStyles = makeStyles(() => ({
  buttonPadding: {
    padding: "0.5rem",
  },

  buttonContainer: {
    flexWrap: "wrap",
    flexDirection: "column",
  },
}));

const GameHeader = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={3} s={3} m={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3">Player: {props.player.name}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={7} s={7} m={7}>
        <Typography
          variant="h1"
          align="center"
          style={{ fontWeight: 600 }}
          gutterBottom
        >
          BOUNTY HUNTERS
        </Typography>
      </Grid>

      <Grid item xs={1}>
        <div className={classes.buttonPadding}>
          <TutorialModal />
        </div>
      </Grid>
      <Grid item xs={1}>
        <div className={classes.buttonPadding}>
          <NavMenu />
        </div>
      </Grid>
    </>
  );
};
export default GameHeader;
