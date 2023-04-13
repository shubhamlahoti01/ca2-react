import React, { useState, useEffect, useRef } from 'react';
import Form from './components/Form';
import Ticket from './components/Ticket';
import Payment from './components/Payment';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState(null);
  const [PNR, setPNR] = useState(null);

  useEffect(() => {
    if (formData) setIsLoggedIn(true);
  }, [formData]);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handlePayment = () => {
    setPNR(generatePNR());
  };

  const generatePNR = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let pnr = '';
    for (let i = 0; i < 6; i++) {
      pnr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pnr;
  };

  const handleTicketDownload = () => {
    // download ticket
    console.log('Ticket downloaded');
  };

  return (
    <div className='App'>
      {isLoggedIn ? (
        PNR ? (
          <Ticket
            PNR={PNR}
            from={formData.from}
            to={formData.to}
            date={formData.date}
            time={formData.time}
            onDownload={handleTicketDownload}
          />
        ) : (
          <Payment onPay={handlePayment} />
        )
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;
