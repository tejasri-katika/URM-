import React from 'react';
import './css/style.css';
import './css/custom.css';

//not

const CandidateRegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
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
          <li>
            <input type="text" placeholder=" Search.." name="search" />
          </li>
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
                <tbody>
                  <tr>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">First Name</label></td>
                    <td className="col-md-3 tbl-row"><input type="text" id="fname" name="fname" /></td>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Last Name</label></td>
                    <td className="col-md-3 tbl-row"><input type="text" id="fname" name="lastname" /></td>
                  </tr>
                  <tr>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Phone Number</label></td>
                    <td className="col-md-3 tbl-row"><input type="text" id="fname" name="phone" /></td>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname" >Email</label></td>
                    <td className="col-md-3 tbl-row"><input type="text" id="fname" name="email" /></td>
                  </tr>
                  <tr>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Date Of Birth</label></td>
                    <td className="col-md-3 tbl-row"><input type="date" id="fname" name="DOB" /></td>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Gender</label></td>
                    <td className="col-md-3 tbl-row">
                      <input type="radio" name="gender" value="Male" id="male" /><label htmlFor="male">Male</label>
                      <input type="radio" name="gender" value="Female" id="female" /><label htmlFor="female">Female</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Ethnicity</label></td>
                    <td className="col-md-3 tbl-row">
                      <select name="ethnicity" id="custom-select">
                        <option value="">-- Select Ethnicity --</option>
                        <option value="African American">African American</option>
                        <option value="Hispanic or Latino">Hispanic or Latino</option>
                        <option value="Native Hawaiian">Native Hawaiian</option>
                        <option value="Native American or Alaska Native">Alaska Native</option>
                        <option value="Asian">Asian</option>
                      </select>
                    </td>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Nationality</label></td>
                    <td className="col-md-3 tbl-row">
                      <select name="nationality" id="custom-select">
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
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Field of Studies</label></td>
                    <td className="col-md-3 tbl-row"><input type="text" id="fname" name="FOS" /></td>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Qualification</label></td>
                    <td className="col-md-3 tbl-row"><input type="text" id="fname" name="qualification" /></td>
                  </tr>
                  <tr>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Upload CV</label></td>
                    <td className="col-md-3 tbl-row"><input type="file" className="custom-file-input" name="cv" /></td>
                    <td className="col-md-3 tbl-row" align="right"><label htmlFor="fname">Publications</label></td>
                    <td className="col-md-3 tbl-row"><input type="file" className="custom-file-input" name="publications" /></td>
                  </tr>
                  <tr>
                    <td className="col-md-3 tbl-row"></td>
                    <td className="col-md-3 tbl-row"></td>
                    <td className="col-md-3 tbl-row">
                      <input type="submit" value="Submit" />
                    </td>
                    <td className="col-md-3 tbl-row"></td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
      <div id="footer">
        <div id="row">
          <div className="col-md-6">All Rights Reserved &copy; URM Application, 2023</div>
          <div className="col-md-6 left-align">Designed By URM Students</div>
        </div>
      </div>
      <div className="chat">
        <input type="checkbox" id="click" />
        <label htmlFor="click">Chat</label>
        <i className="fab fa-facebook-messenger"></i>
        <i className="fas fa-times"></i>
        <div className="wrapper">
          <div className="head-text">
            Let's chat? - Online
          </div>
          <div className="chat-box">
            <div className="desc-text">
              Please fill out the form below to start chatting with the next available agent.
            </div>
            <div className="field">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="field">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="field textarea">
              <textarea cols="30" rows="10" placeholder="Explain your queries.." required></textarea>
            </div>
            <div className="field">
              <button type="submit">Start Chat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateRegistrationForm;
