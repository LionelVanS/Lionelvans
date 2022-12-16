import React from 'react';
import { Link } from 'react-router-dom';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ProfilLink = ({ openingFile }) => {
   return (
      <>
         <div className="profil-container__content__profil__aside__link swipe-button">
            <AttachFileIcon />
            <Link onClick={openingFile}>Télécharger mon cv</Link>
         </div>
      </>
   );
};

export default ProfilLink;
