import React, { useState } from "react";
import {
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import adminPhoto from "./admin.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box } from "@mui/system";

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

const settings = ["Profile", "Logout"];

const RightNav = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [lightTheme, setLightTheme] = useState(true);

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const changeTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <header className="header_toolbar">
      <div className="dash_heading" >Control Panel <span> {<KeyboardDoubleArrowRightIcon/>} </span> Pawna Lake</div>
      <div className="tool_div">
        <Tooltip title="Change Theme">
          <IconButton onClick={changeTheme}>
            <Badge color="secondary">
              {lightTheme ? <LightModeIcon /> : <DarkModeIcon />}
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Orders">
          <IconButton aria-label={notificationsLabel(0)}>
            <Badge badgeContent={0} color="secondary" showZero>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton aria-label={notificationsLabel(0)}>
            <Badge badgeContent={0} color="secondary" showZero>
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Open settings" onClick={handleOpenUserMenu}>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Vikas Harge" src={adminPhoto} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </header>
  );
};

export default RightNav;
