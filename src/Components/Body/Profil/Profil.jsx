import React from 'react';

// COMPONENTS
import ProfilText from './ProfilText/ProfilText';
import ProfilTitle from './ProfilTitle/ProfilTitle';
import ProfilLink from './ProfilLink/ProfilLink';
import ProfilDataText from './ProfilDataText/ProfilDataText';
import ProfilDarkMode from './ProfilDarkMode/ProfilDarkMode';
import ProfilBackground from './ProfilBackground/ProfilBackground';

//MUI
import { Box, Container } from '@mui/material';

const Profil = () => {
   // Function to open file 'Mon CV'
   const openingFile = () => {
      window.open(
         './assets/download/CV_VanSchellebeck_Lionel_DéveloppeurWeb.pdf'
      );
   };
   return (
      <>
         <Box className="profil-container" id="profil">
            <Container className="profil-container__content">
               <div className="profil-container__content__profil">
                  <div className="profil-container__content__profil__text">
                     <ProfilText />
                  </div>
                  <div className="profil-container__content__profil__aside">
                     <ProfilTitle />
                     <ProfilLink openingFile={openingFile} />
                     <ProfilDarkMode />
                  </div>
               </div>

               <div className="profil-container__content__data">
                  <img src="./assets/images/lionel.jpg" alt="lionel" />
                  <ProfilDataText />
               </div>
            </Container>

            <ProfilBackground />
         </Box>
      </>
   );
};

export default Profil;
