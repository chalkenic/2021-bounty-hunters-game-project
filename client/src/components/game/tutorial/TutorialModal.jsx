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

// Text imports
import * as TutorialText from "../../../texts/TutorialText";

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

// Modal handles tutorial menu to explaining gameplay.
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
                {TutorialText.questions.question1}
              </DialogContent>
              <DialogContentText className={classes.answerText} component="div">
                {TutorialText.answers.answer1}
              </DialogContentText>
              <DialogContentText
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
                component="div"
              >
                {TutorialText.questions.question2}
              </DialogContentText>

              <DialogContentText className={classes.answerText} component="div">
                {TutorialText.answers.answer2}
              </DialogContentText>
              <DialogContentText
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
                component="div"
              >
                {TutorialText.questions.question3}
              </DialogContentText>

              <DialogContentText className={classes.answerText} component="div">
                {TutorialText.answers.answer3}
              </DialogContentText>
              <DialogContentText
                style={{ fontWeight: 600, fontSize: "22px" }}
                className={classes.questionText}
                component="div"
              >
                {TutorialText.questions.question4}
              </DialogContentText>
              {/* <DialogContent component="div"> */}
              <DialogContent className={classes.listText} component="div">
                <DialogContent className={classes.listBox} component="div">
                  <DialogContentText
                    className={classes.listText}
                    style={{ fontWeight: 200, fontSize: "20px" }}
                    component="div"
                  >
                    {TutorialText.headers.header1}
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    {TutorialText.answers.answer4}
                  </DialogContentText>
                  <Divider className={classes.headerSeparate} component="div" />
                  <DialogContentText
                    className={classes.listText}
                    style={{ fontWeight: 400, fontSize: "20px" }}
                    component="div"
                  >
                    {TutorialText.headers.header2}
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    {TutorialText.answers.answer5}
                  </DialogContentText>
                  <Divider className={classes.headerSeparate} component="div" />
                  <DialogContentText
                    className={classes.listText}
                    style={{ fontWeight: 400, fontSize: "20px" }}
                    component="div"
                  >
                    {TutorialText.headers.header3}
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    {TutorialText.strategies.strategy1}
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    {TutorialText.strategies.strategy2}
                  </DialogContentText>
                  <DialogContentText
                    className={classes.listText}
                    component="div"
                  >
                    {TutorialText.strategies.strategy3}
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
