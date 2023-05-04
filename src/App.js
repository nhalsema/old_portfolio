import React from 'react';
import './components/LavaLamp.css';
import './components/DescFooter.css';
import './components/Name.css';
import './components/NavBar.css';
import NavBar from './components/NavBar.jsx';
import LavaLamp from './components/LavaLamp.jsx';
// import PopUp from './components/Popup.jsx';

// notes for dev:
// make site accessible 
// future add: mobile navbar = hamburger

// 1. get the popup to close
// 2. update bio and insert
// 3. Create logo using Name Font

// 4. css media queries


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
          Creator</h3>
      </div>
      {/* ~~ footer ~~ */}
      <div className='footer'>
        <h4>last updated: May 2023</h4>
      </div>
      {/* <Modal /> */}
    </div>
  )
};

export default App;
