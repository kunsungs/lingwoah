import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, CircularProgress, Container, Dialog, DialogContent, DialogActions, Divider, IconButton, TextField, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NavBar from './NavBar';
import './DashBoard.css';

function PlanPage() {
  const [plans, setPlans] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [planName, setPlanName] = useState('');
  const [planDuration, setPlanDuration] = useState('');

  const navigate = useNavigate();

  const handleAddPlan = () => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + Number(planDuration));
    const newPlan = {
      id: plans.length + 1,
      name: planName,
      duration: planDuration,
      startDate: startDate,
      endDate: endDate,
      activities: [],
    };
    setPlans([...plans, newPlan]);
    setShowModal(false);

  };

  return (
    <div className='db-container'>
      <NavBar></NavBar>
      <Container>
      <Stack direction="row" sx={{ paddingTop: "1.5em" }}>
          <Typography variant="h6" sx={{ lineHeight: 2, paddingRight: "0.5em" }}>
            GENERATE PLAN
          </Typography>
          <IconButton aria-label="edit" onClick={() => setShowModal(true)} color="black">
            <AddIcon />
          </IconButton>
          </Stack>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Plan Name</Form.Label>
              <Form.Control
                type="text"
                value={planName}
                onChange={(e) => setPlanName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Plan Duration (in days)</Form.Label>
              <Form.Control
                type="number"
                value={planDuration}
                onChange={(e) => setPlanDuration(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddPlan}>
            Create Plan
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        {plans.map((plan, index) => (
          <div key={index}>
            <h3>{plan.name}</h3>
            <p>{plan.duration} days</p>
            <p>{plan.startDate.toLocaleDateString()} - {plan.endDate.toLocaleDateString()}</p>
            <Button onClick={() => navigate(`/plan/${plan.id}`, { state: plans })}>
              EDIT PLAN
            </Button>
          </div>
        ))}
      </div>
      </Container>
    </div>
  );
}

export default PlanPage;




