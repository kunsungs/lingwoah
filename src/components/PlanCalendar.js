import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function PlanCalendar() {
  const [date, setDate] = useState(new Date());
  const [activities, setActivities] = useState({});

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <div>
        <h5>Today is {date.toDateString()}</h5>
      </div>
      <Calendar 
      onChange={onChange} 
      value={date}
       />
    </div>
  );
}

export default PlanCalendar;
