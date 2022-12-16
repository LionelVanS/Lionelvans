import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
   return (
      <nav className="Navbar">
         <ul>
            <li>
               <Link
                  to="profil"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
               >
                  Profil
               </Link>
            </li>
            <li>
               <Link
                  to="experiences"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
               >
                  Parcours
               </Link>
            </li>
            <li>
               <Link
                  to="competences"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
               >
                  Compétences
               </Link>
            </li>
            <li>
               <Link
                  to="portfolio"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
               >
                  Portfolio
               </Link>
            </li>
            <li>
               <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
               >
                  Me Contacter
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
