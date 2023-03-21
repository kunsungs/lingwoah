import React from 'react'
import { Delete } from '@mui/icons-material';
import { Divider, Button } from '@mui/material';

const Plan = ({ plan, onEdit, deletePlan }) => {
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
  
    const handleEdit = () => {
      onEdit(plan);
    }
    return (
      <div style={planStyle}>
        <h3 style={headingStyle}>{plan.name}</h3>
        <p>Length: {plan.duration} days</p>
        <p>Duration: {plan.startDate.toLocaleDateString()} - {plan.endDate.toLocaleDateString()}</p>
        <p>Level: {plan.level}</p>
        <Divider variant="middle" />
        <Button onClick={handleEdit}>EDIT PLAN</Button>
        <Button onClick={() => deletePlan(plan.id)}>{<Delete />}</Button>
      </div>
    );
  }

  export default Plan;
