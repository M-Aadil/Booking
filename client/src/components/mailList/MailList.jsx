import "./mailList.css"
import React, { useState } from 'react';
import validator from 'email-validator';
import emailjs from '@emailjs/browser';


const MailList = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    // Your email service configuration
    const serviceId = 'service_nccpcjh';
    const templateId = 'contact_form';
    const userId = 'v93KWbncYZWoedMjI';

    // Validate the email address
    if (!validator.validate(email)) {
      setMessage(<p style={{color:"white", fontWeight:"530"}}>* Please enter a valid email address.</p>);
      return;
    }

    // Construct the email parameters
    const params = {
      to_email: email,
      to_name: email.split("@")[0],
      from_name: 'Ebooking.com',
      message: 'Ebooking.com',
    };

    // Send the email using emailjs library
    emailjs
      .send(serviceId, templateId, params, userId)
      .then((response) => {
        console.log('Email sent successfully:', response.text);
        setMessage('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setMessage('Email sending failed. Please try again later.');
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
  };

  
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up, we'll reach you and send the best deals</span>
      <form onSubmit={handleSubmit} className="mailInputContainer" style={{display: "flex", width: "27  %"}}>
        <input className="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required />
        <button className="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default MailList