import React, { useState } from 'react';
import ContactIcon from "../../assets/images/ContactIcon.png"


const ContactButton = (props) => {

    const [openContact, setOpenContact] = useState(false);

  return (
    <div className='popupBtn-Container'>
        <button className='popupBtn' onClick={() => { setOpenContact(true)}}>
                {/* <img className='popupBtn-Icon' src={ContactIcon} alt='' /> */}
        </button>
        {openContact && <Contact />}
    </div>    
  )
}

export default ContactButton;
