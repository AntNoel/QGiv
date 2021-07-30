import React from 'react';
import './App.css';
import './App.scss';
import logo from './LOGO_THUMBNAIL.jpg';
import Thermometer from './components/Thermometer';
function App() {
  return (
    <div className='container'>
      {/* Replace this with the logo as an img element with responsive styling  */}
      <img src={logo} alt='Logo' className='logo' />

      <Thermometer
        projectName={'The Water Project - Global water Initiative'}
        projectGoal={1544.0}
        projectAmountRaised={0}
      />
    </div>
  );
}

export default App;
