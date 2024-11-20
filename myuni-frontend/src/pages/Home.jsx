
import React from 'react';
import Navigation from './navigation';
import HomeSection from './HomeSection';
import RightPart from './RightPart';
import Grid from '@mui/material/Grid2';
import { Routes, Route } from 'react-router-dom';
import Profile from './profile';

const Home = () => {
  return (
    <Grid
      container
      className="px-5 lg:px-36"
      style={{ height: '100vh', display: 'flex', flexWrap: 'nowrap' }}
    >
      {/* Left Part */}
      <Grid
        xs={0} // Hidden on small screens
        lg={1}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingRight: '20px',
        }}
      >
        <Navigation />
      </Grid>

      {/* Middle Part */}
      <Grid
        xs={12}
        lg={10}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0 20px',
        }}
      >
        <Routes>
          <Route path="/" element={<HomeSection/>}></Route>
          <Route path="/profile/:id" element={<Profile/>}></Route>
        </Routes>
       
      </Grid>

      {/* Right Part */}
      <Grid
        xs={0} // Hidden on small screens
        lg={1}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '20px',
        }}
      >
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default Home;