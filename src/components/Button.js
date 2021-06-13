import React from 'react';
import '../assets/styles/Button.css';

const Button = ({ title, disableButton }) => {
  return (
    <>
      {disableButton && (
        <button disabled className='Button'>
          {title || 'Registar cuenta'}
        </button>
      )}
      {!disableButton && (
        <button className='Button'>
          {title || 'Registar cuenta'}
        </button>
      )}
    </>
  );
};

export default Button;
