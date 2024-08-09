import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home';
import Navbar from './NavBar/NavBar';
import { AuthContext } from './Context/AuthContext';
import AddUser from './Components/User/AddUser/AddUser';
import UserDetails from './Components/User/UserDetails/UserDetails';
import UpdateUser from './Components/User/UpdateUser/UpdateUser';

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/user/AddUser" element={<AddUser />} /> */}

        {user ? (
          <>
            <Route path="/" element={<><Navbar handleLogout={logout} /><Home /></>} />
            <Route path="/user/AddUser" element={<><Navbar handleLogout={logout} /><AddUser /></>} />
            <Route path="/user/UserDetails" element={<><Navbar handleLogout={logout} /><UserDetails /></>} />
            <Route path="/UpdateUser/:id" element={<><Navbar handleLogout={logout} /><UpdateUser /></>} />
          </>
        ) : (
          <Route path="/*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
