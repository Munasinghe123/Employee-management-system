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
import AddUser from './Components/User/AddUser/AddUser';
import DisplayUser from './Components/User/DisplayUser/DisplayUser';
import UpdateUser from './Components/User/UpdateUser/UpdateUser';
import UserDetails from './Components/User/UserDetails/UserDetails';
//import FigureAnalyser from './Components/FigureAnalyser/FigureAnalyser';

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="user/AddUser" element={<><Navbar handleLogout={logout} /><div className="container"><AddUser /></div></>} />
      <Route
        path="/*"
        element={
          user ? (
            <Routes>
              <Route path="/" element={<><Navbar handleLogout={logout} /><div className="container"><Home /></div></>} />
              {/* <Route path="user/AddUser" element={<><Navbar handleLogout={logout} /><div className="container"><AddUser /></div></>} /> */}
              {/* <Route path="/DisplayUser" element={<><Navbar handleLogout={logout} /><div className="container"><DisplayUser /></div></>} /> */}
              {/* <Route path="/UpdateUser" element={<><Navbar handleLogout={logout} /><div className="container"><UpdateUser /></div></>} /> */}
              <Route path="/UserDetails" element={<><Navbar handleLogout={logout} /><div className="container"><UserDetails /></div></>} />
              <Route path="/UpdateUser/:id" element={<><Navbar handleLogout={logout} /><div className="container"><UpdateUser/> </div></>} />

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