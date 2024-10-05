import React from 'react';
import './Form.css'; 

const UmrahForm = () => {
  return (
    <div className="form-container umrah-form-container">
      <h2>Umrah Service Form</h2>
      <form>
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Departure Date:</label>
        <input type="date" required />

        <label>Passport Number:</label>
        <input type="text" placeholder="Enter your passport number" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UmrahForm;
