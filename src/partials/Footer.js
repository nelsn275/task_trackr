/*** INSTRUCTIONS
* HTML Code -- Should be placed inside the "footer" div.
* CSS Code -- Use the Footer.css file in this folder.
* Testing -- Type the following command: npm run start
*         -- That command might take some time but will result in an internet tab loading up showing the project.
*         -- As soon as you save any changes on your file, it will show on your internet tab.*/
import React from 'react';
import './Footer.css';
import fb from "../assets/fbimg.png"
import linkedin from "../assets/linkimg.png"

function Footer({toplink}) {
  return (
    <div className = "footer">
      <div className = "sb_footer section_padding">
        <div className = "sb_footer-links">
          <div className = "sb_footer-links-div">
            <h4>TaskTrackr</h4>
              <a href="/about">
                <p>About Us</p>
              </a>
              <a href="/profile">
                <p>Profile</p>
              </a>
              <a href= {toplink}>
                <p>Back to Top</p>
              </a>
          </div>
          <div className = "sb_footer-links-div">
            <h4>Coming soon on</h4>
            <div className = "socialmedia">
              <p><img src={fb} alt="Facebook Logo"/></p>
              <p><img src={linkedin} alt="Linkedin Logo"/></p>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className = "sb_footer-below">
          <div className = "sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} TaskTrackr. All rights reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms and Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;