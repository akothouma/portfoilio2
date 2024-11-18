import React, { useState } from 'react';
import NavBar from "./Nav";
import Socials from "./Socials";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', to_email: '', subject: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(''); // Clear error message on input change
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(formData.to_email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setLoading(true); // Set loading to true before sending email

    emailjs.send('service_b8mqc8e', 'template_g92ybsk', formData, 'u8dhO9_Jg6DdLexEa')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
        setFormData({ name: '', to_email: '', subject: '', message: '' });
        setLoading(false); 
      }, (err) => {
        console.error('Failed to send email. Error:', err);
        setErrorMessage('Failed to send email. Please try again later.');
        setLoading(false); 
      });
  };

  return (
    <>
      <NavBar />
      <Socials />
     
      <div className="contactForm">
        <div>
          <p>That chat you are thinking of....Let's have it.</p>
        </div>
        
       
        <form onSubmit={sendEmail}>
         
          <div className="rowformRow" id='a'>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleDataChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="to_email"
              value={formData.to_email}
              onChange={handleDataChange}
              placeholder="Email"
              required
            />
          </div>

         
          <div className="rowformRow">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleDataChange}
              placeholder="Subject"
              required
            />
          </div>

         
          <div className="rowformRow">
            <textarea
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleDataChange}
              placeholder="Message"
              required
            />
          </div>

         
          {errorMessage && <p style={{ color: 'red',fontWeight:"200",fontSize:"15px"}}>{errorMessage}</p>}

          
          <button
            className="submit-btn btn btn-primary"
            disabled={!formData.name || !formData.to_email || !formData.subject || !formData.message || loading} // Disable if any field is empty or if loading
            type="submit" // Use type "submit" for form submission
          >
            {loading ? 'Sending...' : 'SUBMIT'} 
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
