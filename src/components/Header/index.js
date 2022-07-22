import React from 'react';
import Logo from '../../assets/images/logo.jpg'
import Home from '../Home';
import Nav from '../Nav';

const Header = (props) => {

    const {
        pages = [],
        setCurrentPage,
        currentPage
      } = props;

    return (
        <header className='flex-row'>
            <img src={Logo} href={'/'} alt='Connecticut East Dental Center Logo' />
            <div>
            <Nav
                  pages = {pages}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  />  
            </div>
        </header>
    );
    
};

export default Header;