import React from 'react';

import '../assets/styles/Welcome.css';

import LogoNuwe from '../assets/static/LogoNuwe.jpeg';

const Welcome = () => {
  return (
    <a href='https://nuwe.io/' className='Welcome'>
      <h1>Welcome! to Nuwe</h1>
      <img src={LogoNuwe} alt='LogoNuwe' />
      <h2>Click here!</h2>
    </a>
  );
};

export default Welcome;
