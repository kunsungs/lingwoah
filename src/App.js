import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';
import Login from './Login';
import Register from './Register';
import { AuthContextProvider } from './context/AuthContext';
import Plans from './components/Plans';
import PlanDetailsPage from './components/Plans';
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
          <Route path="/plans" element={<PrivateRoutes><Plans /></PrivateRoutes>} />
        </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
