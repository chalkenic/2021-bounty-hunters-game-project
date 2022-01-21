import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useTheme, withStyles } from "@material-ui/core";
import AppTheme from "../styles/AppTheme";
import { useNavigate } from "react-router-dom";
import { resetPlayer } from "../store/slices/currentPlayer-slice";
import { resetGame } from "../store/actions/playerActions";

import { purple, green } from "@material-ui/core/colors";

// Code adapted from Material UI menus: available at:
// https://v4.mui.com/components/menus/#menus

const ColorButton = withStyles((theme) => ({
  root: {
    border: "1px solid grey",
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[900],
    "&:hover": {
      backgroundColor: purple[900],
    },
  },
}))(Button);

const NavMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const theme = useTheme(AppTheme);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExit = () => {
    navigate("/");
    dispatch(resetPlayer());
    dispatch(resetGame("navmenu"));
  };

  return (
    <div>
      <ColorButton
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </ColorButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        style={{ backgroundColor: theme.palette.background.grey }}
      >
        <MenuItem onClick={handleExit}>Exit Game</MenuItem>
      </Menu>
    </div>
  );
};

export default NavMenu;
