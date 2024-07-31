import React, { useContext } from 'react';
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";

import Home from './Components/Home';
//import FashionProfiler from './Components/FashionProfiler/FashionProfiler';
//import FashionVision from './Components/FashionVision/FashionVision';
//import ClothingDetection from './Components/ClothingDetection/ClothingDetection';
import Navbar from './NavBar/NavBar';
import Login from './Components/Login/Login';
//import Profile from './Components/Profile/Profile';
//import Recommender from './Components/Recommender/Recommender';
import Signup from './Components/Signup/Signup';
import { AuthContext } from './Context/AuthContext';
//import FigureAnalyser from './Components/FigureAnalyser/FigureAnalyser';

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="/*"
        element={
          user ? (
            <Routes>
              <Route path="/" element={<><Navbar handleLogout={logout} /><div className="container"><Home /></div></>} />
              <Route path="/fashionProfiler" element={<><Navbar handleLogout={logout} /><div className="container"><FashionProfiler /></div></>} />
              <Route path="/fashionVision" element={<><Navbar handleLogout={logout} /><div className="container"><FashionVision /></div></>} />
              <Route path="/itemscan" element={<><Navbar handleLogout={logout} /><div className="container"><ClothingDetection /></div></>} />
              <Route path="/profile" element={<><Navbar handleLogout={logout} /><div className="container"><Profile /></div></>} />
              <Route path="/recommender" element={<><Navbar handleLogout={logout} /><div className="container"><Recommender /></div></>} />
              <Route path="/figureAnalyser" element={<><Navbar handleLogout={logout} /><div className="container"><FigureAnalyser /></div></>} />
            </Routes>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;