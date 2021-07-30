import React from 'react';

const ProgressBar = ({ labels, goal, amount }) => {
  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const toPercent = (amount, goal) => {
    /*
    Helper Function - Converts amount to a rounded integer amount in relation to the goal

    Returns integer 
    */

    return Math.floor((amount / goal) * 100);
  };

  return (
    <>
      {labels && (
        <div className='progress__label_container'>
          <span>0%</span>
          <div className='progress__label_amount_container'>
            <h3 className='progress__label_amount'>
              {usdFormatter.format(amount)}
            </h3>
            <p>Raised</p>
          </div>
          <span>100%</span>
        </div>
      )}

      <div className='progress'>
        <div
          className='progress__indicator'
          style={{
            width: `${
              toPercent(amount, goal) > 100
                ? '100%'
                : toPercent(amount, goal) + '%'
            }`,
          }}
        >
          <span>{toPercent(amount, goal)}%</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
