import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Welcome.css';

import LogoNuwe from '../assets/static/LogoNuwe.jpeg';

const Welcome = () => {
  return (
    <Link to='/' className='Welcome'>
      <h1>Welcome! to Nuwe</h1>
      <img src={LogoNuwe} alt='LogoNuwe' />
    </Link>
  );
};

export default Welcome;
