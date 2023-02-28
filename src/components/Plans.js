import React, { useState , useEffect } from 'react';
import { Alert, Button, CircularProgress, Container, Dialog, DialogContent, DialogActions, Divider, IconButton, TextField, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NavBar from './NavBar'
import './DashBoard.css'
import { db } from "../firebase";

export const RECEIPTS_ENUM = Object.freeze({
  none: 0,
  add: 1,
  edit: 2,
  delete: 3,
});

function PlanPage() {
  const [action, setAction] = useState(RECEIPTS_ENUM.none);
  const [openDialog, setOpenDialog] = useState(false);
  const [plan, setPlan] = useState('');
  const [plans, setPlans] = useState([]);

  const onClickAdd = () => {
    setAction(RECEIPTS_ENUM.add);
    setOpenDialog(true);
  }

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  const handleAddPlan = () => {
    // Handle adding the plan to the list of plans here
    setPlans([...plans, plan]);
    setPlan('');
    handleCloseDialog();
  }

  return (
    <div className='db-container'>
      <NavBar></NavBar>
      <Container>
      <Stack direction="row" sx={{ paddingTop: "1.5em" }}>
          <Typography variant="h5" sx={{ lineHeight: 2, paddingRight: "0.5em" }}>
            PLANS
          </Typography>
          <IconButton aria-label="edit" onClick={onClickAdd} color="black">
            <AddIcon />
          </IconButton>
        </Stack>
        <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="add-plan-dialog-title">
          <DialogContent>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ paddingBottom: "1em" }}>
                Add a Plan
              </Typography>
              <TextField
                id="plan-name"
                label="Plan Name"
                variant="outlined"
                fullWidth
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
              />
            </Stack>
          </DialogContent>
          </Dialog>
      </Container>
    </div>
  );
}

export default PlanPage;
