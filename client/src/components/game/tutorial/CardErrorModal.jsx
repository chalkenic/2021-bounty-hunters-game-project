import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
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

const CardErrorModal = (props) => {
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
          A card must be clicked before ending your turn. Please try again
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

export default CardErrorModal;
