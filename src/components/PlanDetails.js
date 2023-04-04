import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NavBar from './NavBar';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import PlanCalendar from './PlanCalendar';
import Plan from './Plan';
import Activity from './Activity';

function PlanDetails() {
    const planStyle = {
        backgroundColor: '#d5cedc',
        padding: '16px',
        marginTop: '20px',
        marginBottom: '10px',
        marginRight: '50px',
        borderRadius: '8px',
        display: 'inline-block',
      };
  
      const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px'
      };
      
  const { planId } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const getPlan = async () => {
      const planDoc = await getDoc(doc(db, 'plans', planId));
      if (planDoc.exists()) {
        setPlan(planDoc.data());
      } else {
        console.log('No such document!');
      }
    };
    getPlan();
  }, [planId]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [activities, setActivities] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleActivitySubmit = (activity) => {
    // Add the activity to the list of activities for the selected date
    const newActivities = [...activities];
    const existingDay = newActivities.find((day) => day.date === selectedDate);
    if (existingDay) {
      existingDay.activities.push(activity);
    } else {
      newActivities.push({ date: selectedDate, activities: [activity] });
    }
    setActivities(newActivities);
  };

  return (
    <div className='db-container'>
      <NavBar />
      <Container>
      <div style={planStyle}>
      {plan &&  <h3 style={headingStyle}>{plan.name}</h3>}
      {plan &&  <p>Length: {plan.duration} days</p>}
      {plan &&  <p>Level: {plan.level}</p>}
      </div>
      <Calendar onDateSelect={handleDateSelect} />
      {selectedDate && <Activity date={selectedDate} onSubmit={handleActivitySubmit} />}
      </Container>
    </div>
  );
}

export default PlanDetails;

const Calendar = ({ onDateSelect }) => {
    // Assume plan duration is passed as a prop
    const duration = 7;
    const startDate = new Date(); // Assume today's date is the start date
    const dates = Array.from({ length: duration }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });
  
    return (
      <div>
        {dates.map((date) => (
          <button key={date} onClick={() => onDateSelect(date)}>
            {date.toDateString()}
          </button>
        ))}
      </div>
    );
  };
  
