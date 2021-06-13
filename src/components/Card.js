import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Card.css';

import imgDeveloper from '../assets/static/developer.png';

const Card = () => {
  return (
    <div className='Card'>
      <Link to='/register'>
        <div className='Card-img'>
          <img src={imgDeveloper} alt='' />
        </div>
        <div className='Card-description'>
          <h3>Developers</h3>
          <p>Cuenta personas para entrar en el mundo dev</p>
        </div>
        <p className='Card-icon'>→</p>
      </Link>
    </div>
  );
};

export default Card;
