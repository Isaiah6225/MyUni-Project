
import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"; // Import the MoreHoriz icon
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import event1Image from '../images/event1.jpg';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PostCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = () => {
    console.log("delete tweet")
    handleClose();
  }
  const handleOpenReplyModel = () => {
    console.log("open model")
  }
  const handleCreateRepost = () => {
    console.log("handle create repost")
  }
  const handleLikePost = () => {
    console.log("handle like post")
  }
  const handleMenuClick = (action) => {
    console.log(`Selected action: ${action}`);
    setAnchorEl(null);
  };

  return (
    <div className="">
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://source.unsplash.com/1600x900/?face"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="font-semibold text-sm">Username</span>
              <span className="text-gray-600 text-xs">@username . 2m</span>
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
                
                <MenuItem onClick={handleDeletePost}>
                  Delete 
                </MenuItem>
                <MenuItem onClick={handleDeletePost}>
                  Edit 
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div className="cursor-pointer">
              <p className="mb-2 p-0">Some text here that is meaningful</p>
              <img
                className="w-[15rem] border border-gray-400 p-2 rounded-md"
                src={event1Image}
                alt="post image"
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon className="cursor-pointer text-sm" onClick={handleOpenReplyModel}/>
                <p>43</p>
              </div>
              <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex item-center`}>
                <RepeatIcon onClick={handleCreateRepost} className="cursor-pointer text-sm"/>
                <p>54</p>

              </div>
              <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex item-center`}>
                {true? <FavoriteIcon onClick={handleLikePost} className="cursor-pointer text-xs"/> : <FavoriteBorderIcon onClick={handleLikePost} className="cursor-pointer"/>}
                <p>54</p>
              </div>
              {/* <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon className="cursor-pointer text-xs" onClick={handleOpenReplyModel}/>
                <p>430</p>
              </div> */}
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon className="cursor-pointer text-xs" onClick={handleOpenReplyModel}/>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
