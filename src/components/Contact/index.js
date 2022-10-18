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
    <div>
      <div className='sectionTitle vw'>
        <h2>Contact</h2>
      </div>
      <div className='section flex-row'>
        <div className='content container'>
          <div className='contentTitle'>
            <h3>
              Connecticut East Dental Center
            </h3>
          </div>
          <div>
            <p>
              This is a generic text block that will be filled out at a later time, if not it will be removed.
            </p>
          </div>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input className='formInput' type="text" name="user_name" placeholder='Name' />
            <input className='formInput' type="email" name="user_email" placeholder='Email' />
            <textarea name="message" />
            <input className='formBtn' type="submit" value="Send"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;