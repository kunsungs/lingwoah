import React from 'react'
import './DashBoard.css'
import NavBar from './NavBar'
import ProgressTracker from './progressTracker'


function DashBoard() {


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