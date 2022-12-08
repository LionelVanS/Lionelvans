import React from 'react';

// MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Unstable_Grid2';

// COMPONENTS
import Navbar from './Navbar/Navbar';

const Header = () => {
   return (
      <AppBar color="white">
         <Toolbar>
            <Grid container className="header">
               <Grid item>
                  <Navbar />
               </Grid>
            </Grid>
         </Toolbar>
      </AppBar>
   );
};

export default Header;
