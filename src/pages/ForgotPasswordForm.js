import React, { useState } from 'react';
import '../components/css/style.css';
import '../components/css/custom.css';
const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Add logic to handle form submission, e.g., sending data to the server
  };
  return (
    <div id="container">
      <div id="content">
        <div className="recent">
          <div className="single">
            <h2>Forgot Password?</h2>
          </div>
            <table id="from-table">
              <tbody>
                <tr>
                  <td className="col-md-4 tbl-row" align="right">
                    <label htmlFor="email">Registered Email</label>
                  </td>
                  <td className="col-md-8 tbl-row">
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
                </tr>
                <tr>
                  <td className="col-md-4 tbl-row"></td>
                  <td className="col-md-8 tbl-row" align="center">
                  <button>Submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
