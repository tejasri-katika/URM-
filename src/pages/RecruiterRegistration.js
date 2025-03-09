import React, { useState } from 'react';
import axios from 'axios';

const RecruiterRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    state: '',
    institution: '',
    recruiterAgency: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInputs = (formData) => {
    const { firstName, lastName, email, phoneNumber, state, institution, recruiterAgency } = formData;
  
    if (!firstName) {
      alert('Please enter First Name.');
      return false;
    }
  
    if (!lastName) {
      alert('Please enter Last Name.');
      return false;
    }
  
    if (!email) {
      alert('Please enter Email.');
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    if (!phoneNumber) {
      alert('Please enter Phone Number.');
      return false;
    }
  
    if (!state) {
      alert('Please select a State.');
      return false;
    }
  
    if (!institution) {
      alert('Please select an Institution.');
      return false;
    }
  
    if (!recruiterAgency) {
      alert('Please enter Recruiter Agency.');
      return false;
    }
  
    return true;
  };

  
  const handleRedirect = async (e) => {
    e.preventDefault();
  
    if (validateInputs(formData)) {
      try {
        const response = await axios.post('http://localhost:5000/insertRecruiter', formData);
        console.log('Recruiter registration successful:', response.data);
        // Redirect to the recruiter dashboard after successful registration
        window.location.href = '/dashboard/recruiterdashboard.html';
      } catch (error) {
        console.error('Error registering recruiter:', error);
      }
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
                    <label htmlFor="state">State</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <select
                      name="state"
                      id="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select state</option>
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Texas">Texas</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Utah">Utah</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="institution">Institution</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <select
                      name="institution"
                      id="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Institution</option>
                      <option value="UTA">University of Texas at Arlington</option>
                      <option value="UTD">University of Texas at Dallas</option>
                      <option value="UNT">University of North Texas</option>
                      <option value="UTA1">University of Texas at Austin</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="recruiterAgency">Recruiter Agency</label>
                  </td>
                  <td className="col-md-8 tbl-row">
                    <input
                      type="text"
                      id="recruiterAgency"
                      name="recruiterAgency"
                      value={formData.recruiterAgency}
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

export default RecruiterRegistration;
