/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "header" div.
* CSS Code -- Use the Header.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/

import './Header.css';
import HorizontalMenu from './HorizontalMenu';
import HamburgerMenu from './HamburgerMenu';
import SignInForm from './SignInForm';

function Header() {
  return (
    <section id="menu">
      <div className="header">
        <div className="header-content">
          <div id="hamburgermenu">
            <HamburgerMenu />
          </div>
          <div id="title">Tasktrackr</div>
          <div id="logo">
            <img src="tasktrackr-logo.png" alt="Tasktrackr Logo" />
          </div>
        <div id="signinform">
          <a href="signin.js"><button type="button">Sign In</button></a>
        </div>
        </div>
        <div id="horizontalmenu">
          <HorizontalMenu />
        </div>
      </div>
    </section>
  );
}

export default Header;
