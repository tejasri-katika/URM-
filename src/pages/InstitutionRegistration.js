import React, { useState } from 'react';
import axios from 'axios';

const InstitutionRegistration = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    email: '',
    phoneNumber: '',
    researchAreas: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInputs = () => {
    const { institutionName, email, phoneNumber, researchAreas, address } = formData;

    if (!institutionName.trim()) {
      alert('Please enter the institution name.');
      return false;
    }

    if (!email.trim()) {
      alert('Please enter the email address.');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!phoneNumber.trim()) {
      alert('Please enter the phone number.');
      return false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }

    if (!researchAreas.trim()) {
      alert('Please enter the research focus areas.');
      return false;
    }

    if (!address.trim()) {
      alert('Please enter the address.');
      return false;
    }

    return true;
  };


  const handleRedirect = async (e) => {
    e.preventDefault();

        // Validate inputs before proceeding
        if (!validateInputs()) {
          return;
        }
    
    // Send the POST request to insert institution data
    try {
      const response = await axios.post('http://localhost:5000/insertInstitution', formData);
      console.log('Institution registration successful:', response.data);
      window.location.href = '/dashboard/institutiondashboard.html';

    } catch (error) {
      console.error('Error registering institution:', error);
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
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="researchAreas">Research Focus Areas</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <input
                      type="text"
                      id="researchAreas"
                      name="researchAreas"
                      value={formData.researchAreas}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="address">Address</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <textarea
                      name="address"
                      id="address"
                      cols="100%"
                      rows="10"
                      tabIndex="4"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    ></textarea>
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

export default InstitutionRegistration;
