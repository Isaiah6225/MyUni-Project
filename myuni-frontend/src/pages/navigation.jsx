
import React from 'react';
import logoImage from '../images/MyUni_logo.png';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useSate} from 'react';

const Navigation = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    console.log("logout");
    handleClose();
  };

  console.log('navigationMenu:', navigationMenu);

  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img src={logoImage} alt="MyUni Logo" height="30" width="30" />
        </div>
        
        <div className="space-y-4">
          {/* Check if navigationMenu exists and is iterable */}
          {(Array.isArray(navigationMenu) ? navigationMenu : []).map((item, index) => (

          // {Array.isArray(navigationMenu) && navigationMenu.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer flex space-x-2"
              onClick={() =>
                item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        
        <div className="py-10">
          <Button
            sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#1d9bf0" }}
            variant="contained"
          >
            Post
          </Button>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar alt="username" src="https://source.unsplash.com/1600x900/?face" />
          <div>
            <span className="opacity-70">@Username</span>
          </div>
          <div>
              {/* IconButton with MoreHoriz Icon */}
              <IconButton
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </IconButton>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                
                <MenuItem onClick={handleLogOut}>
                  Log Out 
                </MenuItem>
              </Menu>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
