import React, { useState } from 'react';
import '../components/css/slider.css';
import '../components/css/style.css';
import '../components/css/custom.css';
import CandidateRegistration from './CandidateRegistration'; // Import the CandidateRegistration component
import InstituteRegistration from './InstitutionRegistration'; // Import the InstituteRegistration component
import RecruiterRegistration from './RecruiterRegistration'; // Import the RecruiterRegistration component
import DeiOfficerRegistration from './DeiOfficerRegistration'; // Import the DeiOfficerRegistration component
import axios from 'axios';

const RegistrationPage = () => {

  const [showCandidateRegistration, setShowCandidateRegistration] = useState(false);
  const [showInstituteRegistration, setShowInstituteRegistration] = useState(false);
  const [showRecruiterRegistration, setShowRecruiterRegistration] = useState(false);
  const [showDeiOfficerRegistration, setShowDeiOfficerRegistration] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [institution, setInstitution] = useState('');
  const [userRole, setUserRole] = useState('');


    const handleCandidateRegistrationClick = () => {
      setShowCandidateRegistration(true);
    };

    const handleInstituteRegistrationClick = () => {
      setShowCandidateRegistration(false);
      setShowInstituteRegistration(true);
    };

    const handleRecruiterRegistrationClick = () => {
      setShowCandidateRegistration(false);
      setShowInstituteRegistration(false);
      setShowRecruiterRegistration(true);
    };

    const handleDeiOfficerRegistrationClick = () => {
      setShowCandidateRegistration(false);
      setShowInstituteRegistration(false);
      setShowRecruiterRegistration(false);
      setShowDeiOfficerRegistration(true);
    };
  
    if (showCandidateRegistration) {
      return <CandidateRegistration />;
    }    if (showInstituteRegistration) {
      return <InstituteRegistration />;
    }    if (showRecruiterRegistration) {
      return <RecruiterRegistration />;
    }    if (showDeiOfficerRegistration) {
      return <DeiOfficerRegistration />;
    }

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    console.log('Register button clicked');
    console.log('email:', email);
    console.log('password:', password);

    try {
      // Make a POST request to the /register endpoint
      const response = await axios.post('http://localhost:5000/register', {
        email: email,
        password: password,
        institutionname: institution,
        role: userRole,
        Registrationcol: '', // Set this value as needed
      });

      if (response.data.success) {
        alert('Registration successful');
        // Perform any other actions, such as redirecting to a dashboard
      } else {
        alert('Registration failed');
        // Handle registration failure
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration.');
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
                <label htmlFor="email">Email</label>
              </td>
              <td className="col-md-8 tbl-row">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="col-md-4 tbl-row" align="right">
                <label htmlFor="password">Password</label>
              </td>
              <td className="col-md-8 tbl-row">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="col-md-4 tbl-row" align="right">
                <label htmlFor="retypepassword">Retype Password</label>
              </td>
              <td className="col-md-8 tbl-row">
                <input
                  type="password"
                  id="retypepassword"
                  name="retypepassword"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="col-md-4 tbl-row" align="right">
                <label htmlFor="institution">Institution Name</label>
              </td>
              <td className="col-md-8 tbl-row">
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="col-md-4 tbl-row" align="right">
                <label htmlFor="userrole">Role</label>
              </td>
              <td className="col-md-8 tbl-row">
                <select
                  name="userrole"
                  id="userrole"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                >
                      <option value="">-- Select Role --</option>
                      <option value="URM_CANDIDATE">URM Candidate</option>
                      <option value="INSTITUTION">Institution</option>
                      <option value="RECRUITER">Recruiter</option>
                      <option value="DEI_OFFICER">DEI Officer</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row"></td>
                  <td className="col-md-8 tbl-row" align="center">
                  <p>
                      Register as a Candidate?{' '}
                      <button onClick={handleCandidateRegistrationClick}>
                        Register
                      </button>
                    </p>  
                    &nbsp;&nbsp;
                    <p>
                      Register as a Institution?{' '}
                      <button onClick={handleInstituteRegistrationClick}>
                        Register
                      </button>                    </p>
                    &nbsp;&nbsp;
                    <p>
                      Register as an Recruiter?{' '}
                      <button onClick={handleRecruiterRegistrationClick}>
                        Register
                      </button>                       </p>
                    &nbsp;&nbsp;
                    <p>
                      Register as a DEI officer?{' '}
                      <button onClick={handleDeiOfficerRegistrationClick}>
                        Register
                      </button>                     </p>
                <input type="submit" value="Register" onClick={handleRegisterClick} />
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
