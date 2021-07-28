import React from 'react';

const Thermometer = ({ name, goal, amountRaised }) => {
  return (
    <div class='themometer'>
      <h1>{name}</h1>

      <ProgressBar labels={true} goal={goal} amount={amountRaised} />
    </div>
  );
};

export default Thermometer;
