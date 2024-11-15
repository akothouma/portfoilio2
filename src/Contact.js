import React, { useState } from 'react';
import NavBar from "./Nav";
import Socials from "./Socials";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
 
  const [formData, setFormData] = useState({name:'',to_email: '', subject: '',message: '' });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };
 const sendEmail=(e)=>{
  e.preventDefault()
    emailjs.send('service_b8mqc8e','template_g92ybsk',formData,'u8dhO9_Jg6DdLexEa')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
        setFormData({ name:'',to_email: '',subject: '',  message: '' });
      }, (err) => {
        console.error('Failed to send email. Error:', err);
        alert('Failed to send email. Please try again later.');
      });
    }
   
   
  return (
    <>
      <NavBar />
      <Socials />
     
      <div className="contactForm">
      <div>
      <p>That chat you are thinking of....Let's have it.</p>
     </div>
        {/* Row 1 of form */}
        <div className="rowformRow" id='a'>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleDataChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="to_email"
            value={formData.to_email}
            onChange={handleDataChange}
            placeholder="Email"
          />
        </div>

        {/* Row 2 of form */}
        <div className="rowformRow">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleDataChange}
            placeholder="Subject"
          />
        </div>

        {/* Row 3 of form */}
        <div className="rowformRow">
          <textarea
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleDataChange}
            placeholder="Message"
          />
        </div>

        {/* Submit Button */}
        <button
          className="submit-btn btn btn-primary"
         disabled={! formData.name ||!formData.to_email || !formData.subject || !formData.message} // Disable if any field is empty
          type="submit"
          onClick={sendEmail} // Prevent default form submission
           // Call the submitForm function on click
        >
          SUBMIT
        </button>
      </div>
     
    </>
  );
}

export default ContactForm;
