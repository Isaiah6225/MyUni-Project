import React, { useState } from 'react';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Profile = () => {
  const navigation = useNavigate();
  const [tabValue,setTabValue]=useState("1")
  const handleBack = () => {
    navigation(-1);
  };
  const handleOpenProfile = () => {
    console.log("profile opened");
  };
  const handleFollowUser = () => {
    console.log("following user");
  };
  const handleTabChange=(event, newValue)=>{
    setTabValue(newValue)
    if (newValue===4){
        console.log("likes")
    }
    else if(newValue==1){
        console.log("user posts")
    }
  }
  return (
    <div>
      <section className="z-50 flezx items-center sticky top-0 bg-opacity-95">
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">UserName</h1>
      </section>
      <section>
        <img
          src="https://cdn.pixabay.com/photo/2024/06/21/10/45/pedestrian-8844110_1280.jpg"
          className="w-[100%] h-[15rem] object-cover"
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="username"
            src="https://source.unsplash.com/1600x900/?face"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true? (<Button
            onClick={handleOpenProfile}
            className="rounded-full"
            variant="contained"
            sx={{ borderRadius: "20px" }}
          >
            Edit profile
          </Button>):

          (<Button
            onClick={handleFollowUser}
            className="rounded-full"
            variant="contained"
            sx={{ borderRadius: "20px" }}
          >
            {true?"Follow":"Unfollow"}
          </Button>)}
        </div>
        <div>
            <div className="flex items-center">
                <h1 className="font-bold text-lg"> Username</h1>

            </div>
            <h1 className="text-gray-500">@username</h1>
            <div className="mt-2 space-y-3">
                <p>Hello, I'm a user. This is my bio</p>
                <div className="py-1 flex space-x-5">
                <div className="flex items-center text-gray-500">
                <BusinessCenterIcon/>
                <p className="ml-2 text-sm"> Some University</p>
                </div>
                <div className="flex items-center text-gray-500">
                <LocationOnIcon/>
                <p className="ml-2 text-sm"> Durham, NC</p>
                </div>
                <div className="flex items-center text-gray-500">
                <CalendarMonthIcon/>
                <p className="ml-2 text-sm"> Joined Nov, 2024</p>
                </div>
            </div>
            <div className="flex items-center space-x-5">
                <div className="flex items-center space-x-1 font-semibold">
                    <span>290</span>
                    <span className="text-gray-500"> Followers </span>

                </div>
                <div className="flex items-center space-x-1 font-semibold">
                    <span>600</span>
                    <span className="text-gray-500"> Following </span>

                </div>

            </div>
            </div>
        </div>
      </section>
      <section>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Posts" value="1" />
            <Tab label="Comments" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />

          </TabList>
        </Box>
        <TabPanel value="1">Posts</TabPanel>
        <TabPanel value="2">Comments</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>

      </TabContext>
    </Box>
      </section>
    </div>
  );
};

export default Profile;
