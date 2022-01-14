import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fab, Tooltip, Typography } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { withStyles } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme, barColor) => ({
  answerText: {
    border: "1px solid white",
    padding: "10px",
  },
  questionText: {
    textAlign: "center",
  },
  listText: {
    listStyleType: "none",
  },
}));

const TutorialModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <ColorButton
        variant="outlined"
        color="primary"
        onClick={handleClickOpen("paper")}
      >
        Rules
      </ColorButton>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Game Rules</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")} */}
            <ul>
              <h3 className={classes.questionText}>How to win?</h3>
              {/* <hr /> */}
              <p className={classes.answerText}>
                Complete the progress bar to score points in each room round.
                The player with the most points at the end of the game wins!
              </p>
              <h3 className={classes.questionText}>
                How do I make floor progress?
              </h3>

              <p className={classes.answerText}>
                Choosing cards in your hand will increase the round's progress
                by the value on the card!
              </p>
              <h3 className={classes.questionText}>
                That's great! So what's the catch?
              </h3>

              <p className={classes.answerText}>
                Only one player can reach the end first, and the order of
                players adding their cards to the progress bar is randomised
                every turn.
              </p>
              <h3 className={classes.questionText}>
                And...what's to stop me from just rushing through the progress
                bar as fast as I can?
              </h3>

              <p className={classes.answerText}>
                <ul className={classes.listText}>
                  <h4>Energy</h4>
                  <li>
                    All players have an 'energy' bar, showing the strength you
                    have left to continue looting rooms. If your value hits
                    zero, you lose your will to continue, and leave the game
                    with all current loot (score) collected.
                  </li>
                  <hr />
                  <h4> Room Card damage</h4>
                  <li>
                    At the beginning of each turn (before players have selected
                    a card) the room card will target player(s) to lose energy.
                    If the round is not completed (progress bar not filled)
                    during the turn, player(s) will lose energy as the room card
                    specifies.
                  </li>
                  <hr />
                  <hr />
                  <h4> Strategy</h4>
                  <li>
                    You'll want to work together as a team in order to progress
                    through the room deck. However only the person who plays the
                    final card to completes the progress bar for each room
                    scores the room's points.
                    <hr />
                    You'll want to think carefully about which card you play.
                    for example, if another player has been targeted for energy
                    loss, you could play a lower value card, forcing them to
                    play higher value cards to end the round sooner, or lose energy!
                    <hr />
                    Likewise, if you're the targeted player, you may choose to
                    rush the round's progress by playing high value cards,
                    rather than aiming to win that room's points.
                  </li>
                </ul>
              </p>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TutorialModal;
