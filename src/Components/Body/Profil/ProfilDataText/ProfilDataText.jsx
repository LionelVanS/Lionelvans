import React from 'react';
import { Typography } from '@mui/material';

const ProfilDataText = () => {
   return (
      <>
         <div className="profil-container__content__data__text">
            <Typography>Informations personnelles :</Typography>
            <ul>
               <li>
                  <Typography>Age : 33 ans</Typography>
               </li>
               <li>
                  <Typography>Véhiculé</Typography>
               </li>
               <li>
                  <Typography>Disponible</Typography>
               </li>
            </ul>
         </div>
      </>
   );
};

export default ProfilDataText;
