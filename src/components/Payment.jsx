import React from 'react';

const Payment = ({ onPay }) => {
  return (
    <div>
      <h1>Payment</h1>
      <button onClick={() => onPay()}>Pay</button>
    </div>
  );
};

export default Payment;
