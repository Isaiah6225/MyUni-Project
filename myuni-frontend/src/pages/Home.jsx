
import React from 'react';
import { Grid2 } from '@mui/material';
import Navigation from './navigation';

const Home = () => {
  return (
    <Grid2 container spacing={10} className="px-5 lg:px-36">
      {/* Left Part */}
      <Grid2 item xs={12} lg={2.5} className="hidden lg:block text-center" style={{ paddingRight: '0px' }}>
        <Navigation />
      </Grid2>
      
      {/* Middle Part */}
      <Grid2 item xs={12} lg={6} className="text-center" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <p>Middle part</p>
      </Grid2>
      
      {/* Right Part */}
      <Grid2 item xs={12} lg={3} className="hidden lg:block text-center" style={{ paddingLeft: '0px' }}>
        <p>Right part</p>
      </Grid2>
    </Grid2>
  );
};

export default Home;



// const Home = () => {
//   return (
//     <Grid2 container spacing={2} className="px-5 lg:px-36">
//       {/* Left Part */}
//       <Grid2 item xs={12} lg={2.5} className="hidden lg:block text-center" style={{ alignSelf: 'flex-start' }}>
//         <Navigation />
//       </Grid2>
      
//       {/* Middle Part */}
//       <Grid2 item xs={12} lg={6} className="text-center" style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
//         <p>Middle part</p>
//       </Grid2>
      
//       {/* Right Part */}
//       <Grid2 item xs={12} lg={3} className="hidden lg:block text-center" style={{ alignSelf: 'flex-end' }}>
//         <p>Right part</p>
//       </Grid2>
//     </Grid2>
//   );
// };
