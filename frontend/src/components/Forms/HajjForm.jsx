import React from 'react';
import './Form.css'; 

const HajjForm = () => {
  return (
    <div className="form-container hajj-form-container">
      <h2>Hajj Service Form</h2>
      <form>
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Passport Number:</label>
        <input type="text" placeholder="Enter your passport number" required />

        <label>Departure Date:</label>
        <input type="date" required />

        <label>Contact Number:</label>
        <input type="text" placeholder="Enter your contact number" required />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HajjForm;
