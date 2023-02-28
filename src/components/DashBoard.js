import React from 'react'
import './DashBoard.css'
import NavBar from './NavBar'
import ProgressTracker from './progressTracker'
import AuthDetails from './auth';
import { useState } from 'react';

function DashBoard() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
    <NavBar />
    <div className='db-container'>        
    <ProgressTracker />

    </div>
    </>
  )
}

export default DashBoard