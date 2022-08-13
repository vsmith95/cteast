import React from 'react';
import ContactIcon from "../../assets/images/ContactIcon.png"


const ContactButton = (props) => {
  return (
    <div className='popupBtn-Container'>
        <div className='popupBtn'>
                <img className='popupBtn-Icon' src={ContactIcon} alt='' />
        </div>
    </div>    
  )
}

export default ContactButton;
