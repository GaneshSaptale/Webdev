import React, { useState } from 'react';




function GetQuote() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Registration Number: ${registrationNumber}`);
    console.log(`Mobile Number: ${mobileNumber}`);
    console.log(`Pincode: ${pincode}`);
  };

  return (
    <div className="GetQuote">
      <h1>Get a Quote</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="registrationNumber">Registration Number:</label>
        <input
          type="text"
          id="registrationNumber"
          value={registrationNumber}
          onChange={(event) => setRegistrationNumber(event.target.value)}
        />
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="Number" pattern="[0-9]{10}" maxLength="10" 
          id="mobileNumber"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
        />
        <label htmlFor="pincode">Pincode:</label>
        <input
          type="Number"
          id="pincode"
          value={pincode}
          onChange={(event) => setPincode(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GetQuote;
