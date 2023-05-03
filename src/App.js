import React from 'react';
import './App.css';
import './components/Fonts.css';
import './components/Boxes.css';
import './components/LavaLamp.css';
import NavBar from './components/NavBar.jsx';
import LavaLamp from './components/LavaLamp.jsx';
// import PopUp from './components/Popup.jsx';

// notes for dev:
// make site accessible 
// add link hover note where youre going
// future add: mobile navbar = hamburger

// THREE GOALS
// 1. commit and display new site to github (ensure note about WIP)
// 2. get the popup to close
// 3. update bio and insert

function App() {
  // initiate
  LavaLamp();
  NavBar();
  return (
    <div>
      <canvas id="canvas"></canvas>
      {/* ~~ navbar ~~ */}
      <NavBar />
      {/* ~~ name ~~ */}
      <div className="nameBox">
        <h2>Nicolette <br /> Halsema</h2>
      </div>
      {/* ~~ desc ~~ */}
      <div className="descBox">
        <h3>IT Professional <br />
          Software Developer <br />
          Technical Leader</h3>
      </div>
      {/* ~~ footer ~~ */}
      <div className='footer'>
        <h4>last updated: april 2023</h4>
      </div>
      {/* <PopUp /> */}
    </div>
  )
};

export default App;
