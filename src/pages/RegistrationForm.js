import React from 'react';
import './css/style.css';
import './css/custom.css';
import Footer from '../components/Footer';
//not

const RegistrationForm = () => {
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
            {/* <ul> */}
            {/* <li><a href="#">URM candidate dashboard</a> */}
            {/* <li><a href="#">URM candidate dashboard</a> */}
            {/* </ul> */}
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
          {/* begin recent posts */}
          <div className="recent">
            {/* begin post */}
            <div className="single">
              <h2>Registration</h2>
              {/* <p>This is an example of a WordPress page, you could edit this to put information about yourself or your site so readers know where you are coming from. You can create as many pages like this one or sub-pages as you like and manage all of your content inside of WordPress.</p> */}
            </div>
            {/* end post */}
            <form action="dashboard/recruiterdashboard.html" method="post" id="commentform">
              <table id="from-table">
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="fname">First Name</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="fname" name="fname" /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="lname">Last Name</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="lname" name="lname" /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="email">Email</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="email" name="email" /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="phno">Phone Number</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="phno" name="phonenumber" /></td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="state">State</label></td>
                  <td className="col-md-8 tbl-row">
                    <select name="state" id="state">
                      <option value="select">Select state</option>
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Texas">Texas</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Utah">Utah</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="insti">Institution</label></td>
                  <td className="col-md-8 tbl-row">
                    <select name="insti" id="insti">
                      <option value="select">Select Institution</option>
                      <option value="UTA">University of Texas at Arlington</option>
                      <option value="UTD">University of Texas at Dallas</option>
                      <option value="UNT">University of North Texas</option>
                      <option value="UTA1">University of Texas at Austin</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row" align="right"><label htmlFor="agency">Recruiter Agency</label></td>
                  <td className="col-md-8 tbl-row"><input type="text" id="agency" name="ragency" /></td>
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
          {/* end recent posts */}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default RegistrationForm;
