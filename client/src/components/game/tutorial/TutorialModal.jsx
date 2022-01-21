import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/styles";
import { purple, red, green } from "@material-ui/core/colors";
import { Divider, makeStyles, useTheme } from "@material-ui/core";
import AppTheme from "../../../styles/AppTheme";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[900],
    "&:hover": {
      backgroundColor: purple[900],
    },
  },
}))(Button);

const useStyles = makeStyles((theme, barColor) => ({
  answerText: {
    border: "1px solid white",
    padding: "10px",
    color: "white",
  },
  questionText: {
    textAlign: "center",
    color: "white",
    weight: "400",
  },
  listText: {
    padding: "10px",
    color: "white",
  },

  listBox: {
    border: "1px solid white",
    adding: "10px",
  },

  headerSeparate: {
    borderBottom: "2px solid #fff",
    marginBottom: "1%",
    marginLeft: "5%",
    marginRight: "5%",
  },
}));

// Dialog adapted from Material UI dialog. Available at:
// https://v4.mui.com/components/dialogs/#dialog
const TutorialModal = () => {
  const theme = useTheme(AppTheme);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
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
            <DialogContentText>
              <DialogContent
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
              >
                How to win?
              </DialogContent>
              {/* <hr /> */}
              <DialogContentText className={classes.answerText}>
                Complete the progress bar to score points in each room round.
                The player with the most points at the end of the game wins!
              </DialogContentText>
              <DialogContentText
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
              >
                How do I make floor progress?
              </DialogContentText>

              <DialogContentText className={classes.answerText}>
                Choosing cards in your hand will increase the round's progress
                by the value on the card!
              </DialogContentText>
              <DialogContentText
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
              >
                That's great! So what's the catch?
              </DialogContentText>

              <DialogContentText className={classes.answerText}>
                Only one player can reach the end first, and the order of
                players adding their cards to the progress bar is randomised
                every turn.
              </DialogContentText>
              <DialogContentText
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
              >
                And...what's to stop me from just rushing through the progress
                bar as fast as I can?
              </DialogContentText>

              <DialogContentText className={classes.listText}>
                <DialogContentText className={classes.listBox}>
                  <DialogContentText
                    className={classes.listText}
                    style={{ fontWeight: 200, fontSize: "20px" }}
                  >
                    Energy
                  </DialogContentText>
                  <DialogContentText className={classes.listText}>
                    All players have an 'energy' bar, showing the strength you
                    have left to continue looting rooms. If your value hits
                    zero, you'll stumble on your journey, and reset your score
                    back to
                  </DialogContentText>
                  <Divider className={classes.headerSeparate} />
                  <DialogContentText
                    className={classes.listText}
                    style={{ fontWeight: 400, fontSize: "20px" }}
                  >
                    {" "}
                    Room Card damage
                  </DialogContentText>
                  <DialogContentText className={classes.listText}>
                    At the beginning of each turn (before players have selected
                    a card) the room card will target player(s) to lose energy.
                    If the round is not completed (progress bar not filled)
                    during the turn, player(s) will lose energy as the room card
                    specifies.
                  </DialogContentText>
                  <Divider className={classes.headerSeparate} />
                  <DialogContentText
                    className={classes.listText}
                    style={{ fontWeight: 400, fontSize: "20px" }}
                  >
                    {" "}
                    Strategy
                  </DialogContentText>
                  <DialogContentText className={classes.listText}>
                    You'll want to work together as a team in order to progress
                    through the room deck. However only the person who plays the
                    final card to completes the progress bar for each room
                    scores the room's points.
                  </DialogContentText>
                  <DialogContentText className={classes.listText}>
                    Think carefully about which card you play. for example, if
                    another player has been targeted for energy loss, you could
                    play a lower value card, forcing them to use their higher
                    value cards to end the round sooner, or else lose energy!
                  </DialogContentText>
                  <DialogContentText className={classes.listText}>
                    Likewise, if you're the targeted player, you may choose to
                    speed up the round's progress by playing high value cards,
                    rather than aiming to win that room's points and risk losing
                    energy.
                  </DialogContentText>
                </DialogContentText>
              </DialogContentText>
            </DialogContentText>
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
