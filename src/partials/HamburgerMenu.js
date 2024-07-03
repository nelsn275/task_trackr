/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "hamburgerMenu" div.
* CSS Code -- Use the HamburgerMenu.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import React, { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <>
      <section
        className={`hamburgerMenu ${menuExpanded ? 'expanded' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </section>
      <section className={`menu ${menuExpanded ? 'expanded' : ''}`}>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/about">About</a>
        <a href="/showcase">Showcase</a>
        <a href="/ThankYou">Thank You</a>
      </section>
    </>
  );
}

export default HamburgerMenu;
