import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

const Thermometer = ({ projectName, projectGoal, projectAmountRaised }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(0);
  const [amountRaised, setAmountRaised] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('');

  const mockyEndpoint =
    'https://run.mocky.io/v3/1d147715-23d1-4b16-bd47-b9bf4594d115';

  useEffect(() => {
    setName(projectName);
    setGoal(projectGoal);
    setAmountRaised(projectAmountRaised);
  }, [projectName, projectGoal, projectAmountRaised]);

  useEffect(() => {
    /*
    Display the success or errror message for 3 seconds before dissappearing
    */

    if (!paymentStatus) return;

    const timer = setTimeout(() => {
      setPaymentStatus('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [paymentStatus]);

  const handleDonation = async () => {
    /*
    1. Clicking the "Give Now!" button should perform a mock AJAX call to get data.
    2. Update the amount raised with new data, visually update the progress bar, and produce some type of success message within the widget.
    */

    //Very simple debouncing for 'Give Now' donation button click
    if (paymentStatus) return;

    setPaymentStatus('One moment while we process your payment...');
    try {
      const response = await fetch(mockyEndpoint);
      const data = await response.json();

      setAmountRaised(amountRaised + data.donation_amount);
      setPaymentStatus(
        'Your payment was received. Thank you for your donation!'
      );
    } catch (e) {
      console.log(
        `There was an error performing the AJAX call to process the donation ${e}`
      );
      setPaymentStatus(
        'There was a problem processing your donation. Please try again in a few minutes!'
      );
    }
  };
  return (
    <section className='section section--theme-gray'>
      <h1 className='section_title'>{name}</h1>
      <ProgressBar labels={true} goal={goal} amount={amountRaised} />
      <button
        className='button button--theme-purple button--big'
        onClick={handleDonation}
      >
        Give Now!
      </button>
      {paymentStatus && (
        <h4 className='snackbar snackbar--status-pending'>{paymentStatus}</h4>
      )}
    </section>
  );
};

export default Thermometer;
