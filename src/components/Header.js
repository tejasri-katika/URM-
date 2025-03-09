import React, { useState } from 'react';
import './css/slider.css';
import './css/style.css';
import './css/custom.css';
import AboutUs from '../pages/AboutUs';
import Sidebar from './Sidebar';
import UrmCandidate from '../pages/UrmCandidate';
import AcademicInstitutions from '../pages/AcademicInstitutions';
import Recruiter from '../pages/Recruiter';
import DEIOfficer from '../pages/DEIOfficer';
import ContactUs from '../pages/ContactUs'; // Import the ContactUs component
import Footer from './Footer';
import RegistrationPage from '../pages/RegistrationPage'; // Import the RegistrationPage component
import Login from '../pages/Login'; // Import the Login component
import image from './images/urmlogo.png';

const Header = ({ onHideContent }) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showUrmCandidate, setShowUrmCandidate] = useState(false);
  const [showAcademicInstitutions, setShowAcademicInstitutions] = useState(false);
  const [showRecruiter, setShowRecruiter] = useState(false);
  const [showDEIOfficer, setShowDEIOfficer] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false); // Add state for ContactUs
  const [showRegistration, setShowRegistration] = useState(false); // Add state for RegistrationPage
  const [showLogin, setShowLogin] = useState(false); // Add state for Login component

  const handleUrmCandidateClick = () => {
    setShowUrmCandidate(true);
    setShowAbout(false);
    setShowAcademicInstitutions(false);
    setShowRecruiter(false);
    setShowDEIOfficer(false);
    setShowContactUs(false); // Hide ContactUs content
    setShowRegistration(false); // Show RegistrationPage
    onHideContent();
  };


  const handleAboutClick = () => {
    setShowAbout(true);
    setShowUrmCandidate(false);
    setShowAcademicInstitutions(false);
    setShowRecruiter(false);
    setShowDEIOfficer(false);
    setShowContactUs(false); // Hide ContactUs content
    setShowRegistration(false); // Show RegistrationPage
    onHideContent();
  };

  const handleAcademicInstitutionsClick = () => {
    setShowAcademicInstitutions(true);
    setShowAbout(false);
    setShowUrmCandidate(false);
    setShowRecruiter(false);
    setShowDEIOfficer(false);
    setShowContactUs(false); // Hide ContactUs content
    setShowRegistration(false); // Show RegistrationPage
    onHideContent();
  };

  const handleRecruiterClick = () => {
    setShowRecruiter(true);
    setShowAbout(false);
    setShowUrmCandidate(false);
    setShowAcademicInstitutions(false);
    setShowDEIOfficer(false);
    setShowContactUs(false); // Hide ContactUs content
    setShowRegistration(false); // Show RegistrationPage
    onHideContent();
  };

  const handleDEIOfficerClick = () => {
    setShowDEIOfficer(true);
    setShowAbout(false);
    setShowUrmCandidate(false);
    setShowAcademicInstitutions(false);
    setShowRecruiter(false);
    setShowContactUs(false); // Hide ContactUs content
    setShowRegistration(false); // Show RegistrationPage
    onHideContent();
  };

  const handleContactUsClick = () => {
    setShowContactUs(true); // Show ContactUs content
    setShowAbout(false);
    setShowUrmCandidate(false);
    setShowAcademicInstitutions(false);
    setShowRecruiter(false);
    setShowDEIOfficer(false);
    setShowRegistration(false); // Show RegistrationPage
    onHideContent();
  };


  const handleRegistrationClick = () => {
    setShowRegistration(true); // Show RegistrationPage
    setShowAbout(false);
    setShowUrmCandidate(false);
    setShowAcademicInstitutions(false);
    setShowRecruiter(false);
    setShowDEIOfficer(false);
    setShowContactUs(false); // Hide ContactUs content
    onHideContent();
  };

  const handleLoginClick = () => {
    setShowLogin(true); // Show Login component
    setShowAbout(false);
    setShowUrmCandidate(false);
    setShowAcademicInstitutions(false);
    setShowRecruiter(false);
    setShowDEIOfficer(false);
    setShowContactUs(false);
    setShowRegistration(false);
    onHideContent();
  };


  return (
    <div id="header">
      <div className="logo">
      <img src={image} alt="URM Logo" />
      </div>
      <div className="sponsor">
      <a href="#" onClick={handleLoginClick} className="btn">Login</a> &nbsp;&nbsp; {/* Add onClick handler for Login */}
        <a href="#" onClick={handleRegistrationClick} className="btn">Register</a>
      </div>
      <ul className="categories">
        <li><a href="index.html" className="active">Home</a></li>
        <li><a href="http://mxk8586.uta.cloud/blog/" >Latest Blogs</a></li>
        {/* Use onClick event to trigger the AboutUs component */}
        <li><a href="#" onClick={handleAboutClick}>About Us</a></li>
        <li>
          <a href="#">Services</a>
          <ul>
            {/* Use onClick event to trigger the UrmCandidate component */}
            <li><a href="#" onClick={handleUrmCandidateClick}>URM Candidate</a></li>
            <li><a href="#" onClick={handleAcademicInstitutionsClick}>Academic Institution</a></li>
            <li><a href="#" onClick={handleRecruiterClick}>Recruiter</a></li>
          <li><a href="#" onClick={handleDEIOfficerClick}>DEI Officer</a></li> {/* Add onClick handler for DEI Officer */}
          </ul>
        </li>
        <li><a href="#" onClick={handleContactUsClick}>Contact Us</a></li> {/* Add onClick handler for ContactUs */}
        <li><input type="text" placeholder=" Search.." name="search" /></li>
      </ul>
      {/* Render the AboutUs component conditionally */}
      {showAbout && (
        <div>
          <AboutUs />
          <Sidebar /> {/* Render the Sidebar component */}
        </div>
      )}
      {/* Render the UrmCandidate component and Sidebar conditionally */}
      {showUrmCandidate && (
        <div>
          <UrmCandidate />
          <Sidebar />
        </div>
      )}
            {/* Render the AcademicInstitutions component and Sidebar conditionally */}
            {showAcademicInstitutions && (
        <div>
          <AcademicInstitutions />
          <Sidebar />
        </div>
      )}
            {showRecruiter && (
        <div>
          <Recruiter />
          <Sidebar />
        </div>
      )}
            {showDEIOfficer && (
        <div>
          <DEIOfficer />
          <Sidebar />
        </div>
      )}
            {showContactUs && (
          <ContactUs />
      )}
            {showRegistration && (
          <RegistrationPage />
      )}
            {showLogin && (
          <Login />
      )}
    </div>
  );
};

export default Header;
