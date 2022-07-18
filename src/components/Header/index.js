import React from 'react';
import Logo from '../../assets/images/logobutfunny.jpg'
import Home from '../Home';
import Nav from '../Nav';

const Header = () => {

    return (
        <header className='flex-row'>
            <img src={Logo} href={Home} alt='Connecticut East Dental Center Logo' />
            <h1>Hello World</h1>
        </header>
    );
};

export default Header;