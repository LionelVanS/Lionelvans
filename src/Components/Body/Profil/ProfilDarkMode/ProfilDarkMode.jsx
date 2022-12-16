import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import SettingsIcon from '@mui/icons-material/Settings';

const ProfilDarkMode = () => {
   return (
      <>
         <div className="profil-container__content__profil__aside__dark-mode swipe-button">
            <SettingsIcon />
            <Link>Dark Mode</Link>
         </div>
      </>
   );
};

export default ProfilDarkMode;
