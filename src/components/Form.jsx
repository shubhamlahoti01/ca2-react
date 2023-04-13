import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const submitData = (e) => {
    e.preventDefault();
    console.log({ from, to, date, time });
    onSubmit({ from, to, date, time });
  };
  return (
    <div className='form-main'>
      <h1>Book Ticket </h1>
      <form className='input-form' onSubmit={submitData}>
        <input
          type='text'
          name='from'
          placeholder='Journey Start From'
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type='text'
          name='to'
          placeholder='To'
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type='time'
          name='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
