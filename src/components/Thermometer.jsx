import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

import ProgressBar from './ProgressBar';

const Thermometer = ({
  projectName,
  projectGoal,
  projectAmountRaised,
  logo,
}) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(0);
  const [amountRaised, setAmountRaised] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [snackbarTheme, setSnackbarTheme] = useState('');
  const mockyEndpoint =
    'https://run.mocky.io/v3/1d147715-23d1-4b16-bd47-b9bf4594d115';

  useEffect(() => {
    setName(projectName);
    setGoal(projectGoal);
    setAmountRaised(projectAmountRaised);
  }, [projectName, projectGoal, projectAmountRaised]);

  useEffect(() => {
    /*
    Removes the display of the payment status after 2 seconds
    */

    if (!paymentStatus) return;

    const timer = setTimeout(() => {
      setPaymentStatus('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [paymentStatus]);

  const toPercent = (amount, goal) => {
    /*
    Helper Function - Converts amount to a rounded integer amount (percent) in relation to the goal

    Returns integer 
    */

    return Math.floor((amount / goal) * 100);
  };

  const changeSnackbarTheme = (status = 'pending') => {
    switch (status) {
      case 'pending':
        setSnackbarTheme('snackbar--status-pending');
        break;
      case 'success':
        setSnackbarTheme('snackbar--status-success');
        break;
      case 'error':
        setSnackbarTheme('snackbar--status-error');
        break;
      default:
        throw Error('Error changing the snackbar element theme');
    }
  };

  const handleDonation = async () => {
    /*
    1. Clicking the "Give Now!" button should perform a mock AJAX call to get data.
    2. Update the amount raised with new data, visually update the progress bar, and produce some type of success message within the widget.
    */

    //Very simple debouncing for 'Give Now' donation button click
    if (paymentStatus) return;

    changeSnackbarTheme('pending');
    setPaymentStatus('One moment while we process your payment...');
    try {
      const response = await fetch(mockyEndpoint);
      const data = await response.json();

      setAmountRaised(amountRaised + data.donation_amount);
      changeSnackbarTheme('success');
      setPaymentStatus(
        'Your payment was received. Thank you for your donation!'
      );
    } catch (e) {
      changeSnackbarTheme('error');
      setPaymentStatus(
        `There was a problem processing your donation. Please try again in a few minutes! (${e})`
      );
    }
  };
  return (
    <div className='main'>
      <img src={logo} alt='Logo' className='main__logo' />
      <section className='section section--theme-gray'>
        <h1 className='section__title'>{name}</h1>
        <span
          className={`stamp ${
            toPercent(amountRaised, goal) >= 100 ? 'stamp--status-active' : ''
          }`}
        >
          Success
        </span>
        <ProgressBar
          labels={true}
          goal={goal}
          amount={amountRaised}
          snackbarTheme={snackbarTheme}
          toPercent={toPercent}
        />
        <button
          className='button button--theme-purple button--big button--pulse'
          onClick={handleDonation}
        >
          Give Now!
        </button>
        {paymentStatus && (
          <h4 className={`snackbar ${snackbarTheme}`}>{paymentStatus}</h4>
        )}
      </section>
    </div>
  );
};

Thermometer.propTypes = {
  projectName: PropTypes.string,
  projectGoal: PropTypes.number,
  projectAmountRaised: PropTypes.number,
  logo: PropTypes.string,
};
export default Thermometer;
