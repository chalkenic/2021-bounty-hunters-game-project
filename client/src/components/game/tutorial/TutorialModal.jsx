import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/styles";
import { purple, green } from "@material-ui/core/colors";
import { Divider, makeStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[900],
    "&:hover": {
      backgroundColor: purple[900],
    },
  },
}))(Button);

const useStyles = makeStyles(() => ({
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
        <DialogTitle id="scroll-dialog-title" component="div">
          Game Rules
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"} component="div">
          <DialogContent
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            component="div"
          >
            <DialogContent>
              <DialogContent
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
                component="div"
              >
                How to win?
              </DialogContent>
              <DialogContentText className={classes.answerText} component="div">
                Complete the progress bar to score points in each room round.
                The player with the most points at the end of the game wins!
              </DialogContentText>
              <DialogContentText
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
                component="div"
              >
                How do I make floor progress?
              </DialogContentText>

              <DialogContentText className={classes.answerText} component="div">
                Choosing cards in your hand will increase the round's progress
                by the value on the card!
              </DialogContentText>
              <DialogContentText
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
                component="div"
              >
                That's great! So what's the catch?
              </DialogContentText>

              <DialogContentText className={classes.answerText} component="div">
                Only one player can reach the end first, and the order of
                players adding their cards to the progress bar is randomised
                every turn.
              </DialogContentText>
              <DialogContentText
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
                component="div"
              >
                And...what's to stop me from just rushing through the progress
                bar as fast as I can?
              </DialogContentText>
              {/* <DialogContent component="div"> */}
              <DialogContent className={classes.listText} component="div">
                <DialogContent className={classes.listBox} component="div">
                  <DialogContentText
                    className={classes.listText}
                    style={{ fontWeight: 200, fontSize: "20px" }}
                    component="div"
                  >
                    Energy
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    All players have an 'energy' bar, showing the strength you
                    have left to continue looting rooms. If your value hits
                    zero, you'll stumble on your journey, and reset your score
                    back to
                  </DialogContentText>
                  <Divider className={classes.headerSeparate} component="div" />
                  <DialogContentText
                    className={classes.listText}
                    style={{ fontWeight: 400, fontSize: "20px" }}
                    component="div"
                  >
                    Room Card damage
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    At the beginning of each turn (before players have selected
                    a card) the room card will target player(s) to lose energy.
                    If the round is not completed (progress bar not filled)
                    during the turn, player(s) will lose energy as the room card
                    specifies.
                  </DialogContentText>
                  <Divider className={classes.headerSeparate} component="div" />
                  <DialogContentText
                    className={classes.listText}
                    style={{ fontWeight: 400, fontSize: "20px" }}
                    component="div"
                  >
                    Strategy
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    You'll want to work together as a team in order to progress
                    through the room deck. However only the person who plays the
                    final card to completes the progress bar for each room
                    scores the room's points.
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    Think carefully about which card you play. for example, if
                    another player has been targeted for energy loss, you could
                    play a lower value card, forcing them to use their higher
                    value cards to end the round sooner, or else lose energy!
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    Likewise, if you're the targeted player, you may choose to
                    speed up the round's progress by playing high value cards,
                    rather than aiming to win that room's points and risk losing
                    energy.
                  </DialogContentText>
                </DialogContent>
              </DialogContent>
              {/* </DialogContent> */}
            </DialogContent>
          </DialogContent>
        </DialogContent>
        <DialogActions component="div">
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TutorialModal;
