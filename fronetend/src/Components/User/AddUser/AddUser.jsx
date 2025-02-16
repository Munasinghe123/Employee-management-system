import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './AddUser.css'; // Import the CSS file

export default function AddUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    userName: "",
    password: "",
    contactNumber: "",
    address: "",
    role: "",
    email: "",
    salary: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/user/userDetails"));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:3001/users/adduser", {
      name: String(inputs.name),
      userName: String(inputs.userName),
      password: String(inputs.password),
      contactNumber: Number(inputs.contactNumber),
      address: String(inputs.address),
      role: String(inputs.role),
      email: String(inputs.email),
      salary: Number(inputs.salary),
    });
  };

  return (
    <div className="add-user-container">
      <h1>Add User</h1>

      <form onSubmit={handleSubmit} className="add-user-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
        />
        
        <label>Username</label>
        <input
          type="text"
          name="userName"
          onChange={handleChange}
          value={inputs.userName}
          required
        />
        
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={inputs.password}
          required
        />
        
        <label>Contact Number</label>
        <input
          type="number"
          name="contactNumber"
          onChange={handleChange}
          value={inputs.contactNumber}
          required
        />
        
        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address}
          required
        />
        
        <label>Role</label>
        <input
          type="text"
          name="role"
          onChange={handleChange}
          value={inputs.role}
          required
        />
        
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={inputs.email}
        />
        
        <label>Salary</label>
        <input
          type="number"
          name="salary"
          onChange={handleChange}
          value={inputs.salary}
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
