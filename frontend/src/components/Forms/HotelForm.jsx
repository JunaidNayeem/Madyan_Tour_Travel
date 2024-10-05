import React from 'react';
import './Form.css'; 

const HotelForm = () => {
  return (
    <div className="form-container hotel-form-container">
      <h2>Hotel Booking Form</h2>
      <form>
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Check-in Date:</label>
        <input type="date" required />

        <label>Check-out Date:</label>
        <input type="date" required />

        <label>Number of Guests:</label>
        <input type="number" placeholder="Enter number of guests" required />

        <label>Room Type:</label>
        <select required>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>

        <input type="submit" value="Book Now" />
      </form>
    </div>
  );
};

export default HotelForm;
