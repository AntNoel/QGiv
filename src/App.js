import React from 'react';
import './App.scss';

import Thermometer from './components/Thermometer';
const App = () => {
  return (
    <div>
      <Thermometer
        projectName={'QGiv'}
        projectGoal={544.0}
        projectAmountRaised={360}
        logo={
          'https://e61876afe81f284f7d8b-eac207698dd36238bf78b86590787c76.ssl.cf2.rackcdn.com/qgiv_logo_cropped_png-1445178041'
        }
      />
    </div>
  );
};

export default App;
