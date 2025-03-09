import React, { useState } from 'react';
import './css/style.css';
import './css/custom.css';
import Footer from '../components/Footer';
import CandidateRegistration from './CandidateRegistration'; // Import the CandidateRegistration component
import RecruiterRegistration from './RecruiterRegistration';
import InstituteRegistration from './InstitutionRegistration'; // Import the InstituteRegistration component
import DeiOfficerRegistration from './DeiOfficerRegistration';

//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
//not going to use this page
const Registration = () => {
  const [showCandidateRegistration, setShowCandidateRegistration] = useState(false);
  const [showRecruiterRegistration, setShowRecruiterRegistration] = useState(false);
  const [showInstituteRegistration, setShowInstituteRegistration] = useState(false);
  const [showDeiOfficerRegistration, setShowDeiOfficerRegistration] = useState(false);

  const handleRecruiterRegistrationClick = () => {
    setShowCandidateRegistration(false);
    setShowInstituteRegistration(false);
    setShowRecruiterRegistration(true);
  };

  const handleInstituteRegistrationClick = () => {
    setShowCandidateRegistration(false);
    setShowInstituteRegistration(true);
  };
      const handleDeiOfficerRegistrationClick = () => {
      setShowCandidateRegistration(false);
      setShowInstituteRegistration(false);
      setShowRecruiterRegistration(false);
      setShowDeiOfficerRegistration(true);
    };

  const handleCandidateRegistrationClick = () => {
    setShowCandidateRegistration(true);
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

  return (
    <div>
    <div id="wrapper">
      <div id="header">
        <div className="logo">
          <a href="index.html"><img src="images/urmlogo.png" alt="URM Logo" /></a>
        </div>
        <div className="sponsor">
          <a href="login.html" className="btn">Login</a> &nbsp;&nbsp;
          <a href="register.html" className="btn">Register</a>
        </div>
        <ul className="categories">
          <li><a href="index.html">Home</a></li>
          <li>
            <a href="aboutus.html">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
            <ul>
              <li><a href="urmcandidate.html">URM Candidate</a></li>
              <li><a href="institution.html">Academic Institution</a></li>
              <li><a href="recruiter.html">Recruiter</a></li>
              <li><a href="deiofficer.html">DEI Officer</a></li>
            </ul>
          </li>
          <li><a href="contactus.html">Contact Us</a></li>
          <li><input type="text" placeholder=" Search.." name="search" /></li>
        </ul>
      </div>
      <div id="container">
        <div id="content">
          <div className="recent">
            <div className="single">
              <h2>Registration</h2>
            </div>

              <table id="from-table">
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="fname">Email</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="fname" name="email" /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="fname">Password</label></td>
                  <td className="col-md-8 tbl-row"><input type="password" id="fname" name="password" /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="fname">Retype Password</label></td>
                  <td className="col-md-8 tbl-row"><input type="password" id="fname" name="retypepassword" /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="fname">Institution Name</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="fname" name="institution" /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="fname">Role</label></td>
                  <td className="col-md-8 tbl-row">
                    <select name="userrole" id="custom-select">
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
                     <p>Register as a Recruiter?                      
                       <button onClick={handleRecruiterRegistrationClick}>
                        Register
                      </button></p> &nbsp;&nbsp;
                    <p>Register as an Institution? 
                      <button onClick={handleInstituteRegistrationClick}>
                        Register
                      </button>
                      </p> &nbsp;&nbsp;
                    <p>Register as a DEI Officerr? 
                      <button onClick={handleDeiOfficerRegistrationClick}>
                        Registerr
                      </button>

                    </p>
                  </td>
                </tr>
              </table>
          </div>
        </div>
      </div>
    </div>
<Footer/>
    </div>
  );
};

export default Registration;
