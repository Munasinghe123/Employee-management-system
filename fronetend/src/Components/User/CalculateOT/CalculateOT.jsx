import React, { useState, useEffect } from "react";
import axios from "axios";
import './CalculateOT.css'

const OvertimeCalculator = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    // Fetch employees with role "employee"
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        const employeesList = response.data.users.filter(user => user.role === 'employee');
        setEmployees(employeesList);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleEmployeeChange = (event) => {
    const employeeId = event.target.value;
    const employee = employees.find(emp => emp._id === employeeId);
    setSelectedEmployee(employee);
    setSalary(employee ? employee.salary : 0);
  };

  const handleHoursChange = (event) => setHours(event.target.value);
  const handleRateChange = (event) => setRate(event.target.value);

  const calculateOvertime = () => {
    const hoursNumber = parseFloat(hours);
    const ratePercentage = parseFloat(rate);

    if (!hoursNumber || isNaN(ratePercentage) || ratePercentage < 0 || ratePercentage > 100) {
      alert("Please enter valid hours and rate percentage (0-100).");
      return;
    }

    const rateDecimal = ratePercentage / 100; // Convert percentage to decimal
    const overtimeAmount = salary * hoursNumber * rateDecimal; // Calculate overtime payment
    alert(`Overtime Payment Amount: $${overtimeAmount.toFixed(2)}`);
  };

  return (
    <div className="overtime-calculator">
      <h1>Overtime Payment Calculator</h1>

      <div>
        <label htmlFor="employee">Select Employee:</label>
        <select id="employee" onChange={handleEmployeeChange}>
          <option value="">--Select an Employee--</option>
          {employees.map(employee => (
            <option key={employee._id} value={employee._id}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>

      {selectedEmployee && (
        <div>
          <p><strong>Selected Employee Salary:</strong> ${salary}</p>

          <div>
            <label htmlFor="hours">Overtime Hours:</label>
            <input
              id="hours"
              type="number"
              value={hours}
              onChange={handleHoursChange}
            />
          </div>

          <div>
            <label htmlFor="rate">Overtime Rate (% of salary):</label>
            <input
              id="rate"
              type="number"
              value={rate}
              onChange={handleRateChange}
              min="0"
              max="100"
            />
          </div>

          <button onClick={calculateOvertime}>Calculate Overtime</button>
        </div>
      )}
    </div>
  );
};

export default OvertimeCalculator;
