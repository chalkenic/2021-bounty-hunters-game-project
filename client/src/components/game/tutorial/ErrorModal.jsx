import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withStyles,
} from "@material-ui/core";

const ColoredDialogContentText = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}))(DialogContentText);

const StyledDialogTitle = withStyles((theme) => ({
  root: {
    fontWeight: 800,
  },
}))(DialogTitle);

const ErrorModal = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.open) {
      handleClickOpen();
    }
  }, [props.open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <StyledDialogTitle id="alert-dialog-title">{"ERROR"}</StyledDialogTitle>
      <DialogContent>
        <ColoredDialogContentText id="alert-dialog-description">
          {props.children}
        </ColoredDialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorModal;
