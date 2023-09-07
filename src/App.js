import React from 'react';
import './components/LavaLamp.css';
import './components/DescFooter.css';
import './components/Name.css';
import './components/NavBar.css';
import NavBar from './components/NavBar.jsx';
import LavaLamp from './components/LavaLamp.jsx';

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
        <h3>
          Currenly Open to New Work<br /><br />
          IT Professional<br />
          Software Developer<br />
          Creator
        </h3>
      </div>
      {/* ~~ footer ~~ */}
      <div className='footer'>
        <h4>last updated: September 2023</h4>
      </div>
    </div>
  )
};

export default App;
