import React from 'react';
import PropTypes from 'prop-types';
const ProgressBar = ({ labels, goal, amount, snackbarTheme, toPercent }) => {
  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      {labels && (
        <div className='progress__label_container'>
          <span>0%</span>
          <div className='progress__label_amount_container'>
            <h3
              className={`progress__label_amount ${
                snackbarTheme === 'snackbar--status-success'
                  ? 'progress__label_amount--pulse'
                  : ''
              }`}
            >
              {usdFormatter.format(amount)}
            </h3>
            <p>Raised</p>
          </div>
          <span>100%</span>
        </div>
      )}

      <div
        className={`progress ${
          toPercent(amount, goal) >= 100
            ? 'progress--complete'
            : 'progress--incomplete'
        }`}
      >
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

ProgressBar.propTypes = {
  labels: PropTypes.bool,
  goal: PropTypes.number,
  amount: PropTypes.number,
  snackbarTheme: PropTypes.string,
  toPercent: PropTypes.func,
};

export default ProgressBar;
