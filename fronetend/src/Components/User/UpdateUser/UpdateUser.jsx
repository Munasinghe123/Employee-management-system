import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './UpdateUser.css'; // Import the CSS file

function UpdateUser() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate(); // Changed to navigate
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:3001/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:3001/users/${id}`, {
        name: String(inputs.name),
        userName: String(inputs.userName),
        password: String(inputs.password),
        contactNumber: Number(inputs.contactNumber),
        address: String(inputs.address),
        role: String(inputs.role),
        email: String(inputs.email),
        salary: Number(inputs.salary),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => navigate("/user/userDetails"));
  };

  const handleBack = () => {
    navigate("/user/userDetails");
  };

  return (
    <div className="update-user-container">
      <h1>Update User</h1>

      <form onSubmit={handleSubmit} className="update-user-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name || ""}
          required
        />

        <label>Username</label>
        <input
          type="text"
          name="userName"
          onChange={handleChange}
          value={inputs.userName || ""}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={inputs.password || ""}
          required
        />

        <label>Contact Number</label>
        <input
          type="number"
          name="contactNumber"
          onChange={handleChange}
          value={inputs.contactNumber || ""}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address || ""}
          required
        />

        <label>Role</label>
        <input
          type="text"
          name="role"
          onChange={handleChange}
          value={inputs.role || ""}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={inputs.email || ""}
        />

        <label>Salary</label>
        <input
          type="number"
          name="salary"
          onChange={handleChange}
          value={inputs.salary || ""}
        />

        <div className="update-user-buttons">
          <button type="button" className="back-button" onClick={handleBack}>
            Back
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
