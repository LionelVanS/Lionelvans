import React from 'react';

// COMPONENTS
import ProfilText from './ProfilText/ProfilText';
import ProfilAsideTitle from './ProfilAside/ProfilAsideTitle/ProfilAsideTitle';
import ProfilAsideLink from './ProfilAside/ProfilAsideLink/ProfilAsideLink';
import ProfilDataText from './ProfilDataText/ProfilDataText';

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
                     <ProfilAsideTitle />
                     <ProfilAsideLink openingFile={openingFile} />
                  </div>
               </div>

               <div className="profil-container__content__data">
                  <img src="./assets/images/lionel.jpg" alt="lionel" />
                  <ProfilDataText />
               </div>
            </Container>

            <div className="profil-container__background">
               <img src="./assets/images/background.jpg" alt="background" />
            </div>
         </Box>
      </>
   );
};

export default Profil;
