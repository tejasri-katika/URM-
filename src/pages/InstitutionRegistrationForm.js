import React from 'react';
import './css/style.css';
import './css/custom.css';
import Footer from '../components/Footer';

const InstitutionRegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id="wrapper">
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
            <form onSubmit={handleSubmit}>
              <table id="from-table">
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="institutionname">Institution Name</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="institutionname" name="institutionname" required /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="email">Email</label></td>
                  <td className="col-md-8 tbl-row"><input type="email" id="email" name="email" required /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="phno">Phone Number</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="phno" name="phno" required /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="resareas">Research Focus Areas</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="resareas" name="researchareas" required /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="address">Address</label></td>
                  <td className="col-md-8 tbl-row"><textarea name="address" id="address" cols="100%" rows="10" tabIndex="4" required></textarea></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row"></td>
                  <td className="col-md-8 tbl-row" align="center">
                    <input type="submit" value="Submit" />
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default InstitutionRegistrationForm;
