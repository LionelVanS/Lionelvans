import React from 'react';

// COMPONENTS
import Profil from './Profil/Profil';
import Experiences from './Experiences/Experiences';
import Competences from './Compétences/Competences';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

const Main = () => {
   return (
      <>
         <main className="main-container">
            <Profil />
            <Experiences />
            <Competences />
            <Portfolio />
            <Contact />
         </main>
      </>
   );
};

export default Main;
