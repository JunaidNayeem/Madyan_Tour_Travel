import React from 'react';
import './Form.css'; 

const FlightForm = () => {
  return (
    <div className="form-container flight-form-container">
      <h2>Flight Booking Form</h2>
      <form>
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Departure Date:</label>
        <input type="date" required />

        <label>Departure City:</label>
        <input type="text" placeholder="Enter departure city" required />

        <label>Arrival City:</label>
        <input type="text" placeholder="Enter arrival city" required />

        <label>Class:</label>
        <select required>
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>

        <input type="submit" value="Book Flight" />
      </form>
    </div>
  );
};

export default FlightForm;
