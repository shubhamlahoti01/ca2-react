import React from 'react';

const Ticket = ({ PNR, from, to, date, time, onDownload }) => {
  return (
    <div>
      <h1>PNR = {PNR}</h1>
      <h2>from: {from}</h2>
      <h2>to: {to}</h2>
      <h2>date: {date}</h2>
      <h2>time: {time}</h2>
      <button onClick={onDownload}>Download Ticket</button>
    </div>
  );
};

export default Ticket;
