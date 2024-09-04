import "../Css/Skills.css"
import ractjs from "../Icons/reactjs.svg"
import js from "../Icons/js.svg"
import html from "../Icons/html5.svg"
import css from "../Icons/css3.svg"
import nodejs from "../Icons/nodejs.svg"
import expressjs from "../Icons/expressjs.svg"
import tailwind from "../Icons/tailwind.svg"
import git from "../Icons/git.svg"
import ds from "../Icons/ds.png"
import redux from "../Icons/redux.svg"
import mongodb from "../Icons/mongodb.svg"

export function Skills() {
    return (
      <div id="skills-section">
        <div className="activity-flex">
          <h1>Skills</h1>
          {/* Activity Items */}
          <div className="activity-item">
            <div className="icon-container">
              <img src={ractjs} alt="Developing" className="icon" />
            </div>
            <p>React.js</p>
          </div>
          <div className="activity-item">
            <div className="icon-container">
              <img src={js} alt="Mac OS" className="icon" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className="activity-item">
            <div className="icon-container">
              <img src={html} alt="Cinema" className="icon" />
            </div>
            <p>HTML5</p>
          </div>
          <div className="activity-item">
            <div className="icon-container">
              <img src={css} alt="Coffee" className="icon" />
            </div>
            <p>CSS3</p>
          </div>
  
          {/* More Activity Items */}
          <div className="activity-item">
            <div className="icon-container">
              <img src={nodejs} alt="Music" className="icon" />
            </div>
            <p>Node.js</p>
          </div>
          <div className="activity-item">
            <div className="icon-container">
              <img src={expressjs} alt="Games" className="icon" />
            </div>
            <p>Express.js</p>
          </div>
          <div className="activity-item">
            <div className="icon-container">
              <img src={tailwind} alt="Designing" className="icon" />
            </div>
            <p>Tailwind CSS</p>
          </div>
          <div className="activity-item">
            <div className="icon-container">
              <img src={git} alt="Sports" className="icon" />
            </div>
            <p>Git</p>
          </div>
  
          {/* Final Row */}
          <div className="activity-item">
            <div className="icon-container">
              <img src={ds} alt="Painting" className="icon" />
            </div>
            <p>Data Structure</p>
          </div>
          <div className="activity-item">
            <div className="icon-container">
              <img src={redux} alt="Reading" className="icon" />
            </div>
            <p>Redux</p>
          </div>
          <div className="activity-item">
            <div className="icon-container">
              <img src={mongodb} alt="Reading" className="icon" />
            </div>
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    );
  }
  