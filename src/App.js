import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';
import Calender from './components/Calender';
import Analytics from './components/Analytics';
import Login from './Login';
import Register from './Register';
import { AuthContextProvider } from './context/AuthContext';
import PlanPage from './components/PlanPage';
import PrivateRoutes from './privateRoute';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
    <Router>
    <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Login setCurrentUser={setCurrentUser}/>} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoutes><DashBoard /></PrivateRoutes>} />
          <Route path="/plans" element={<PrivateRoutes><PlanPage /></PrivateRoutes>} />
          <Route path="/calender" element={<PrivateRoutes><Calender /></PrivateRoutes>} />
          <Route path="/analytics" element={<PrivateRoutes><Analytics /></PrivateRoutes>} />
        </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
