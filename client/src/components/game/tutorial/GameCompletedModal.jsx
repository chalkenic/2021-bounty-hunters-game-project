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
import { useSelector } from "react-redux";
import AppPrimaryButton from "../../../appComponents/AppPrimaryButton";

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

const GameCompletedModal = (props) => {
  const players = useSelector((state) => state.allPlayers.players);
  const [open, setOpen] = useState(false);

  var finalPlayers = [];

  players.map((player) => {
    finalPlayers.push(player);
  });

  finalPlayers.sort(({ score: a }, { score: b }) => b - a);

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

  try {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledDialogTitle id="alert-dialog-title">
          {"Game Over"}
        </StyledDialogTitle>
        <DialogContent>
          <ColoredDialogContentText>
            Winner: {finalPlayers[0].name}!!!!
          </ColoredDialogContentText>
        </DialogContent>
        <DialogContent>
          <ColoredDialogContentText>
            Final score count:
          </ColoredDialogContentText>
          {players.map((player) => {
            return (
              <ColoredDialogContentText key={player.id}>
                {player.name} - {player.score}
              </ColoredDialogContentText>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            End Game
          </Button>
        </DialogActions>
      </Dialog>
    );
  } catch (error) {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledDialogTitle id="alert-dialog-title">
          {"Game Closed"}
        </StyledDialogTitle>
        <DialogContent></DialogContent>
        <DialogContent>
          <ColoredDialogContentText>
            Game has been closed. Please return to home menu.
          </ColoredDialogContentText>
        </DialogContent>
        <DialogActions>
          <AppPrimaryButton to="/">Home</AppPrimaryButton>
        </DialogActions>
      </Dialog>
    );
  }
};
export default GameCompletedModal;
