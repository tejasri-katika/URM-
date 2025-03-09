import React, { useState } from 'react';
import axios from 'axios';
// import '../css/style.css';
// import '../css/custom.css';

const DeiOfficerRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    institutionName: '',
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const validateInputs = () => {
    if (!formData.firstName || !formData.lastName || !formData.institutionName || !formData.email || !formData.phoneNumber) {
      alert('Please fill in all required fields.');
      return false;
    }
     if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  };


  const handleRedirect = async (e) => {
    e.preventDefault();

    if (validateInputs(formData)) {
      try {
        const response = await axios.post('http://localhost:5000/insertDEIOfficer', formData);
        console.log('DEI officer registration successful:', response.data);
        // Redirect to the DEI officer dashboard after successful registration
        window.location.href = '/dashboard/deiofficerdashboard.html';
      } catch (error) {
        console.error('Error registering DEI officer:', error);
      }
    } else {
      alert('Please fill in all required fields before submitting.');
    }
  };


  return (
    <div id="container">
      <div id="content">
        <div className="recent">
          <div className="single">
            <h2>Registration</h2>
          </div>
            <table id="from-table">
              <tbody>
                <tr>
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="firstName">First Name</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="lastName">Last Name</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="institutionName">Institution Name</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <input
                      type="text"
                      id="institutionName"
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="email">Email</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row"></td>
                  <td className="col-md-8 tbl-row" align="center">
                  <button onClick={handleRedirect}>Register</button>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default DeiOfficerRegistration;
