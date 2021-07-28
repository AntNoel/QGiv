import React from 'react';

const ProgressBar = ({ labels, goal, amount }) => {
  const formatToUSD = () => {
    /*
        Formats number to US currency by adding comma(s), full cents amount and dollar sign
        
        Returns floating number
      */
  };

  return (
    <div>
      <h3>{formatToUSD(amount)}</h3>
      <p>Raised</p>
      <span>0%</span>
      <span>100%</span>
      <div class='progress_div'></div>
    </div>
  );
};

export default ProgressBar;
