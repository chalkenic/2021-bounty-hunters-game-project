import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import AppPrimaryButton from "./AppPrimaryButton";
import { useTheme } from "@material-ui/core";
import AppTheme from "../styles/AppTheme";
import { useNavigate } from "react-router-dom";

// Code adapted from Material UI menus: available at:
// https://v4.mui.com/components/menus/#menus
const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const theme = useTheme(AppTheme);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ backgroundColor: theme.palette.background.paper }}
      >
        Menu
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        style={{ backgroundColor: theme.palette.background.grey }}
      >
        <MenuItem onClick={handleClose}>Exit Game</MenuItem>
      </Menu>
    </div>
  );
};

export default NavMenu;
