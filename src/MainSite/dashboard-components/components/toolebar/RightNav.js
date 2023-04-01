import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../utility/Loader";

function notificationsLabel(count) {



  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}


const RightNav = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { error, loading, isAuthenticated, userData} = useSelector((state)=>state.userData)

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [lightTheme, setLightTheme] = useState(true);

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleLogout = ()=>{
    dispatch(logout());
    setAnchorElUser(null);
  }

  const handleProfile = ()=>{
    navigate('/account')
    setAnchorElUser(null);
  }

  const handleSelectMenu = () => {
    setAnchorElUser(null);
  };


  const changeTheme = () => {
    setLightTheme(!lightTheme);
  };


  return (
    <>
    { loading ? <Loader/> : <div className="header_toolbar">
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
          onClose={handleSelectMenu}
        >

        <MenuItem onClick={handleProfile}>
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>

        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Log Out</Typography>
        </MenuItem>

        </Menu>
      </div>
    </div> }
    </>
    
  );
};

export default RightNav;
