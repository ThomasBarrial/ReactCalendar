import React, { useState } from 'react';
import Picker from './picker.jsx';
import DayRecord from './dayRecord';

import './App.css';

function App() {
  const [dayActive, setDayActive] = useState(true);
  const [newDate, setNewDate] = useState(new Date());
  console.log(newDate);
  return (
    <div className=" flex flex-col h-screen bg-darkGray justify-center items-center">
      <h1 className="text-white mb-5 text-2xl font-bold">React Calendar</h1>
      {dayActive ? <Picker setDayActive={setDayActive} setNewDate={setNewDate} /> : <DayRecord newDate={newDate} setDayActive={setDayActive} />}
    </div>
  );
}

export default App;
