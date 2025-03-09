import React, { useState } from 'react';
import '../components/css/slider.css';
import '../components/css/style.css';
import '../components/css/custom.css';
import ForgotPswd from './ForgotPasswordForm';
import axios from 'axios';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [showForgotPswd, setShowForgotPswd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlepasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleForgotPswdClick = () => {
    setShowForgotPswd(true);
  };

 
  const handleCandidateLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Candidate login clicked');
      console.log('Email:', email);
      console.log('Password:', password);
  
      const response = await axios.post('http://localhost:5000/loginc', {
        email: email,
        password: password,
      });
  
      if (response.data.success) {
        const role = response.data.role;
        alert(`Candidate login successful. Role: ${role}`);
        
        // Redirect to the appropriate dashboard based on the role
        switch (role) {
          case 'URM_CANDIDATE':
            window.location.href = '/dashboard/candidatedashboard.html?email=' + email;
            break;
          case 'RECRUITER':
            window.location.href = '/dashboard/recruiterdashboard.html?email=' + email;
            break;
          case 'INSTITUTION':
            window.location.href = '/dashboard/institutiondashboard.html?email=' + email;
            break;
          case 'DEI_OFFICER':
            window.location.href = '/dashboard/deiofficerdashboard.html?email=' + email;
            break;
          default:
            // Handle unexpected role
            break;
        }
      } else {
        // Candidate login failed, show an error message
        alert('Invalid email or password for candidate.');
      }
    } catch (error) {
      console.error('Error during candidate login:', error);
      // Handle error, e.g., show an error message
      alert('An error occurred during candidate login.');
    }
  };
  
  if (showForgotPswd) {
    return <ForgotPswd />;
  }
  return (
    <div id="container">
      <div id="content">
        <div className="recent">
          <div className="single">
            <h2>Login</h2>
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
                    onChange={handleEmailChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="col-md-4 tbl-row" align="right">
                  <label htmlFor="password">Password</label>
                </td>
                <td className="col-md-8 tbl-row">
                  <input
                    type="text"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlepasswordChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="col-md-4 tbl-row"></td>
                <td className="col-md-8 tbl-row" align="center">
                  <p onClick={handleCandidateLogin}>Candidate? Login</p>
                  &nbsp;&nbsp;
                  <p onClick={handleCandidateLogin}>
                    Recruiter?{' '}
                    <a >Login</a>
                  </p>
                  &nbsp;&nbsp;
                  <p onClick={handleCandidateLogin}>
                    Institution?{' '}
                    <a >Login</a>
                  </p>
                  &nbsp;&nbsp;
                  <p onClick={handleCandidateLogin}>
                    DEI officer? <a >Login</a>
                  </p>
                  &nbsp;&nbsp;
                  <input type="submit" value="Login" onClick={handleCandidateLogin} />
                  
                  <p>
                    <button onClick={handleForgotPswdClick}>Forgot Password?</button>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Login;
