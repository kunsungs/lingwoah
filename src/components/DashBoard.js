import NavBar from './NavBar';
import './DashBoard.css'
import { db } from "../firebase"
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import "firebase/firestore";
import { CircularProgress, Container, Stack, Typography} from '@mui/material';
import PlanPage from './PlanPage';
import PlanCalendar from './PlanCalendar';


function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      });
      
      return () => {
        unsubscribe();
      };
    }, []);
  

    if (loading && !user) {
        return <CircularProgress color="inherit" sx={{ marginLeft: '50%', marginTop: '25%' }}/>;
    }

    return (
        <div className='db-container'>
          <NavBar />
            <Container>
              <Stack direction="row" sx={{ paddingTop: "0.5em" }}>
                <Typography variant="h5" sx={{ lineHeight: 2, paddingLeft: "1.0em" }}>
                WELCOME BACK!
                </Typography>
              </Stack>
            </Container>
            <Container>
            <Stack direction="row" sx={{ paddingTop: "0.1em" }}>
              <PlanCalendar />
              </Stack>
            </Container>

        </div>
    );
}

export default Dashboard;
