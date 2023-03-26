import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button, Container, IconButton, TextField, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NavBar from './NavBar';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc
} from 'firebase/firestore';
import './PlanPage.css';
import { db } from '../firebase';
import Plan from './Plan';


function PlanPage() {
  const [plans, setPlans] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [planName, setPlanName] = useState('');
  const [planDuration, setPlanDuration] = useState('');
  const [planLevel, setPlanLevel] = useState('');

  const navigate = useNavigate();

  const handleAddPlan = async () => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + Number(planDuration));
    const newPlan = {
      id: plans.length + 1,
      name: planName,
      duration: planDuration,
      level: planLevel,
      startDate: startDate,
      endDate: endDate,
      activities: [],
    };
    if (planName === '' || planDuration === '' || planLevel === '') {
      alert('Please fill out all the field');
      return;
    }
    setPlans([...plans, newPlan]);
    setShowModal(false);
    setPlanName('');
    setPlanDuration('');
    setPlanLevel('');
    addDoc(collection(db, 'plans'), newPlan)
      .then(docRef => {
        setPlans([...plans, { id: docRef.id, ...newPlan }]);
        setShowModal(false);
        setPlanName('');
        setPlanDuration('');
        setPlanLevel('');
      })
      .catch(error => console.log(error));
  };

  const editPlan = () => {
    setIsEditing(true);

  }
  const deletePlan = async (planId) => {
    await deleteDoc(doc(db, 'plans', planId));
    const updatedPlans = plans.filter(plan => plan.id !== planId);
    setPlans(updatedPlans);
  }

  useEffect(() => {
    const q = query(collection(db, "plans"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const plansArr = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const startDate = data.startDate.toDate();
        const endDate = data.endDate.toDate();
        plansArr.push({
          id: doc.id,
          name: data.name,
          duration: data.duration,
          level: data.level,
          startDate,
          endDate,
          activities: data.activities,
        });
      });
      setPlans(plansArr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='pp-container'>
      <NavBar></NavBar>
      <Container>
      <Stack direction="row" sx={{ paddingTop: "0.5em" }}>

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
            <Form.Group>
            <Form.Label>Level</Form.Label>
            <Form.Select onChange={(e) => setPlanLevel(e.target.value)} value={planLevel} >
              <option>Select one</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Focused Skill(s)</Form.Label>
              <Form>
              <div>
                <Form.Check
                  inline
                  label="Reading"
                />
                <Form.Check
                  inline
                  label="Writing"
                />
                <Form.Check
                  inline
                  label="Speaking"
                />
                <Form.Check
                  inline
                  label="Listening"
                />
              </div>
              </Form>
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
            <Plan
              key={index}
              plan={plan}
              onEdit={editPlan}
              deletePlan={deletePlan}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PlanPage;
