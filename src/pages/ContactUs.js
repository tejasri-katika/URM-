// ContactUs.js

import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';



const ContactUs = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      user_name: nameInput.current.value,
      user_email: emailInput.current.value,
      message: messageInput.current.value
    };

    emailjs
      .send('service_e6jrrwb', 'template_lz9cvh8', data, 'SZZp9U-jTSggxWgVa')
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="container">
      <div id="content">
        <div className="recent">
          <div className="single">
            <h2>Contact Us</h2>
          </div>
        </div>
        <table id="from-table">
          <tbody>
            <tr>
              <td className="col-md-4 tbl-row" align="right">
                <label htmlFor="user_name">Your Name</label>
              </td>
              <td className="col-md-8 tbl-row">
                <input
                  type="text"
                  id="user_name"
                  ref={nameInput}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="col-md-4 tbl-row" align="right">
                <label htmlFor="user_email">Your Email</label>
              </td>
              <td className="col-md-8 tbl-row">
                <input
                  type="email"
                  id="user_email"
                  ref={emailInput}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="col-md-4 tbl-row" align="right">
                <label htmlFor="message">Message</label>
              </td>
              <td className="col-md-8 tbl-row">
                <textarea
                  name="message"
                  id="message"
                  cols="100%"
                  rows="10"
                  tabIndex="4"
                  ref={messageInput}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="col-md-4 tbl-row"></td>
              <td className="col-md-8 tbl-row" align="center">
                <button onClick={sendEmail}>Send</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactUs;