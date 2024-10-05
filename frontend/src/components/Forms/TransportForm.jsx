import React from 'react';
import './Form.css'; 

const TransportForm = () => {
  return (
    <div className="form-container transport-form-container">
      <h2>Transport Service Form</h2>
      <form>
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Pickup Date:</label>
        <input type="date" required />

        <label>Pickup Location:</label>
        <input type="text" placeholder="Enter pickup location" required />

        <label>Dropoff Location:</label>
        <input type="text" placeholder="Enter dropoff location" required />

        <label>Vehicle Type:</label>
        <select required>
          <option value="sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="van">Van</option>
        </select>

        <input type="submit" value="Book Transport" />
      </form>
    </div>
  );
};

export default TransportForm;
