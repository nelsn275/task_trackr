/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "horizontalMenu" div.
* CSS Code -- Use the HorizontalMenu.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import React from 'react';
import './HorizontalMenu.css';

function HorizontalMenu() {
  return (
    <div className="horizontalMenu">
      <a href="/dashboard">Dashboard</a>
      <a href="/profile">Profile</a>
      <a href="/about">About</a>
      <a href='/showcase'>Showcase</a>
      <a href='/thankyou'>Thank You</a>
    </div>
  );
}

export default HorizontalMenu;