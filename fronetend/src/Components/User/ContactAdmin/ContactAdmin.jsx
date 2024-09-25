
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactAdmin.css'

function ContactAdmin() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cb99dmt', 'template_hae3dh8', form.current, {
        publicKey: 'SYjeI94bKxx6e628N',
      })
      .then(
        () => {
          console.log('SUCCESS!');

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="contact-form-container">

      <h1>Contact Admin Page</h1>

      <div class="contact-form">

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required /> <br /><br />

          <label>Email</label>
          <input type="email" name="user_email" required /> <br /><br />

          <label>Message</label>
          <textarea name="message" required /><br /><br />
        
          <input type="submit" value="Send" />
        </form>

      </div>
      
    </div>
  )
}

export default ContactAdmin
