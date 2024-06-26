import React from 'react';
import './contactme.css';

const ContactMe = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">GET IN TOUCH</h2>
      <p className="contact-description">
        If you have an open position in your team or if you are hiring for an entry or mid-level software engineer, feel free to reach out.
        <p>I am available for an interview right away and ready to contribute from day one!</p>
      </p>
      <div className="contact-buttons">
        <a href="mailto:adias1@depaul.edu" className="contact-btn email-btn">Send an Email</a>
        <a href="https://www.linkedin.com/in/alishadias/" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin-btn">Send a message on LinkedIn</a>
      </div>
      <p className="footer-text">Created & Designed by Alisha Mozes Dias</p>
    </div>
  );
}

export default ContactMe;
