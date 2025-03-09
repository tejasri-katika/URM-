import React, { useState } from 'react';
import '../components/css/style.css';
import '../components/css/custom.css';
import axios from 'axios'; // Import axios for making HTTP requests


const CandidateRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    ethnicity: '',
    nationality: '',
    fieldOfStudies: '',
    qualification: '',
  });


  const validateInputs = () => {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      dateOfBirth,
      gender,
      ethnicity,
      nationality,
      fieldOfStudies,
      qualification,
    } = formData;
  
    // Check if any of the required fields are empty
    if (!firstName || !lastName || !phoneNumber || !email || !dateOfBirth || !gender || !ethnicity || !nationality || !fieldOfStudies || !qualification) {
      alert('Please fill in all required fields.');
      return false;
    }
  
    // Check email format using a regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Check phone number format using a regular expression
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }
  
    return true;
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleRedirect  = async (e) => { 
       e.preventDefault();

       if (!validateInputs()) {
        return; // Stop further execution if inputs are not valid
      }
    
    try {
      const response = await axios.post('http://localhost:5000/insertCandidate', formData);
      window.location.href = '/dashboard/candidatedashboard.html';

      console.log('Candidate registration successful:', response.data);
    } catch (error) {
      console.error('Error registering candidate:', error);
      alert('Error registering candidate')
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
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="firstName">First Name</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="lastName">Last Name</label>
                  </td>
                  <td className="col-md-3 tbl-row">
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
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="email">Email</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="gender">Gender</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <input
                      type="radio"
                      id="genderMale"
                      name="gender"
                      value="Male"
                      onChange={handleInputChange}
                      required
                    />{' '}
                    Male{' '}
                    <input
                      type="radio"
                      id="genderFemale"
                      name="gender"
                      value="Female"
                      onChange={handleInputChange}
                      required
                    />{' '}
                    Female
                  </td>
                </tr>
                <tr>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="ethnicity">Ethnicity</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <select
                      name="ethnicity"
                      id="ethnicity"
                      value={formData.ethnicity}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">-- Select Ethnicity --</option>
                      <option value="African American">African American</option>
                      <option value="Hispanic or Latino">Hispanic or Latino</option>
                      <option value="Native Hawaiian">Native Hawaiian</option>
                      <option value="Native American or Alaska Native">Alaska Native</option>
                      <option value="Asian">Asian</option>
                    </select>
                  </td>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="nationality">Nationality</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <select
                      name="nationality"
                      id="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">-- Select Nationality --</option>
                      <option value="United States">United States</option>
                      <option value="India">India</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Spain">Spain</option>
                      <option value="Canada">Canada</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="fieldOfStudies">Field of Studies</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <input
                      type="text"
                      id="fieldOfStudies"
                      name="fieldOfStudies"
                      value={formData.fieldOfStudies}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="qualification">Qualification</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="cv">Upload CV</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <input
                      type="file"
                      id="cv"
                      className="custom-file-input"
                      name="cv"
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td className="col-md-3 tbl-row" align="right">
                    <label htmlFor="publications">Publications</label>
                  </td>
                  <td className="col-md-3 tbl-row">
                    <input
                      type="file"
                      id="publications"
                      className="custom-file-input"
                      name="publications"
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="col-md-3 tbl-row"></td>
                  <td className="col-md-3 tbl-row"></td>
                  <td className="col-md-3 tbl-row" align="right">
                    
                  <button onClick={handleRedirect}>Register</button>
                  </td>
                  <td className="col-md-3 tbl-row"></td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default CandidateRegistration;
