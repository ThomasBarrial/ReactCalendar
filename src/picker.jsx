import React from 'react';
import Calendar from 'react-calendar';

import './Calendar.css';

function Picker({ setDayActive, setNewDate }) {
  const handleChange = (date) => {
    setNewDate(date);
    setDayActive(false);
  };

  return (
    <div className="flex p-10 shadow-shad w-5/12 bg-black  rounded-xl">
      <Calendar onChange={handleChange} />
    </div>
  );
}

export default Picker;
