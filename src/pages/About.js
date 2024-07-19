import React from 'react';
import './About.css';
import fb from "../assets/fbimg.png"
import linkedin from "../assets/linkimg.png"
import x from "../assets/x.png"
import adam from "../assets/adam.png"
import jared from "../assets/jared.png"
import nick from "../assets/nick.png"
import mikem from "../assets/mikem.png"
import mikes from "../assets/mikes.png"
import julian from "../assets/julian.png"

const About = () => {
    console.log('Rendering About Page');
  return (
    <div>
      <h1>About Page</h1>
      <p>Meet the amazing team who made TaskTrackr possible!</p>
      <div className="team-member-grid">
        {/* Adam Booth */}
        <section>
          <div className="team-member">
            <img src={adam} alt="Adam Booth Picture" />
            <h2>Adam Booth</h2>
            <h3>Graphic Designer</h3>
            <ul>
              <li>Hobbies: Reading, Ukulele, Drawing</li>
              <li>Worked on: The TaskTrackr Logo along with many of the page's visual elements</li>
            </ul>
            <div className="socialmediaabout">
              <a href="#" id="socialmediaimg"><img src={fb} alt="Facebook Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={linkedin} alt="LinkedIn Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={x} alt="X Logo" /></a>
            </div>
          </div>
        </section>

        {/* Mike Menjivar-McGrath */}
        <section>
          <div className="team-member">
            <img src={mikem} alt="Mike Menjivar-McGrath Picture" />
            <h2>Mike Menjivar-McGrath</h2>
            <h3>Project Manager</h3>
            <ul>
              <li>Hobbies: Pickleball, Learning Web Development</li>
              <li>Contributions: Established the project environment (React App, Firebase), Registration Form, Project Management using Jira Tasks</li>
            </ul>
            <div className="socialmediaabout">
              <a href="#" id="socialmediaimg"><img src={fb} alt="Facebook Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={linkedin} alt="LinkedIn Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={x} alt="X Logo" /></a>
            </div>
          </div>
        </section>

        {/* Nick Nelson */}
        <section>
          <div className="team-member">
            <img src={nick} alt="Nick Nelson Picture" />
            <h2>Nick Nelson</h2>
            <h3>Configuration Manager</h3>
            <ul>
              <li>Hobbies: Basketball, Coding, Reading, Camping</li>
              <li>Worked On: Integration of Firebase</li>
            </ul>
            <div className="socialmediaabout">
              <a href="#" id="socialmediaimg"><img src={fb} alt="Facebook Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={linkedin} alt="LinkedIn Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={x} alt="X Logo" /></a>
            </div>
          </div>
        </section>

        {/* Jared Nash */}
        <section>
          <div className="team-member">
            <img src={jared} alt="Jared Nash Picture" />
            <h2>Jared Nash</h2>
            <h3>Documentation Manager</h3>
            <ul>
              <li>Fun Fact: I don't have a strong sense of smell.</li>
              <li>Hobbies: Programming, Baking, Video Editing, Reading, going on walks</li>
              <li>Worked on: Header, Hamburger Menu, About Page, Profile Update Form Visual, Task Details (map)</li>
            </ul>
            <div className="socialmediaabout">
              <a href="#" id="socialmediaimg"><img src={fb} alt="Facebook Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={linkedin} alt="LinkedIn Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={x} alt="X Logo" /></a>
            </div>
          </div>
        </section>

        {/* Julian Hernandez Garcia */}
        <section>
          <div className="team-member">
            <img src={julian} alt="Julian Hernandez Garcia Picture" />
            <h2>Julian Hernandez Garcia</h2>
            <h3>Quality Assurance</h3>
            <ul>
              <li>Hobbies: Pixel Art, Composition, Programming, Video Games</li>
              <li>Contributions: Footer, About Page, TaskList Page, Quality Assurance</li>
            </ul>
            <div className="socialmediaabout">
              <a href="#" id="socialmediaimg"><img src={fb} alt="Facebook Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={linkedin} alt="LinkedIn Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={x} alt="X Logo" /></a>
            </div>
          </div>
        </section>

        {/* Michael Steadman */}
        <section>
          <div className="team-member">
            <img src={mikes} alt="Michael Steadman Picture" />
            <h2>Michael Steadman</h2>
            <h3>Team Leader</h3>
            <ul>
              <li>Hobbies: Art, Programming, Video Games</li>
              <li>Worked on: Sign-in functionality, bugfixes, Firestore</li>
            </ul>
            <div className="socialmediaabout">
              <a href="#" id="socialmediaimg"><img src={fb} alt="Facebook Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={linkedin} alt="LinkedIn Logo" /></a>
              <a href="#" id="socialmediaimg"><img src={x} alt="X Logo" /></a>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default About;