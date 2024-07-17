/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "header" div.
* CSS Code -- Use the Header.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';
import HorizontalMenu from './HorizontalMenu';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  const { currentUser } = useAuth();

  return (
    <section id="menu">
      <div className="header">
        <div className="header-content">
          <div id="hamburgermenu">
            <HamburgerMenu />
          </div>
          <div id="logo">
            <img src={`${process.env.PUBLIC_URL}/tasktrackr_logo_pic.png`} alt="Tasktrackr Logo" />
          </div>
          <div id="title">TaskTrack<span id='blue'>r</span></div>
          <div id="signinform">
            <a href="/signin"><button type="button">Sign In</button></a>
          </div>
        </div>
        <div id="horizontalmenu">
          <HorizontalMenu />
        </div>
          <div id="signedin">
            {currentUser ? `Signed in as: ${currentUser.email}` : null}
          </div>
      </div>
    </section>
  );
}

export default Header;