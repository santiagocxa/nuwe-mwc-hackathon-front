import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Card.css';

const Card = ({ card, img }) => {
  const { name, description } = card;
  return (
    <div className='Card'>
      <Link to='/register'>
        <div className='Card-img'>
          <img src={img} alt={name} />
        </div>
        <div className='Card-description'>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <p className='Card-icon'>→</p>
      </Link>
    </div>
  );
};

export default Card;
