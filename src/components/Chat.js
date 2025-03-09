import React,{useState} from 'react';
import './css/slider.css';
import './css/custom.css';
import emailjs from '@emailjs/browser';


const Chat = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_e6jrrwb', 'template_lz9cvh8', formData, 'SZZp9U-jTSggxWgVa')
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
    <div className="chat">
      <input type="checkbox" id="click" />
      <label htmlFor="click">Chat</label>
      <i className="fab fa-facebook-messenger"></i>
      <div className="wrapper">
        <div className="head-text">Let's chat? - Online</div>
        <div className="chat-box">
          <div className="desc-text">
            Please fill out the form below to start chatting with the next available agent.
          </div>
          <form>
            <div className="field">
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field">
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Email Address"
                value={formData.user_email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="field textarea">
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                placeholder="Explain your queries.."
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="field">
              <button type="submit" onClick={sendEmail}>
                Start Chat
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;