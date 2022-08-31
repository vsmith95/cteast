import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({openContact}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oi4tn4h', 'template_yt4hemt', form.current, '0t016AYtzBNSpBIn_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contactModal'>
      <div className='contactContainer'>
        <div className='contactTitle'>
          <h3>
            Connecticut East Dental Center
          </h3>
        </div>
        <div>
          <p>
            Hi! Let us know how we can help and we’ll respond shortly.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;