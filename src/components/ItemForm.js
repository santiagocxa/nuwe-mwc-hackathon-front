import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import '../assets/styles/ItemForm.css';

import logoBusiness from '../assets/static/business.png';
import logoDeveloper from '../assets/static/developer.png';

const ItemForm = (props) => {
  const {
    title,
    description,
    seccionNumber,
    seccionInfo,
    display,
    route,
    card,
  } = props.data || [];

  /**
     In the following component, the component of the start cards is reused and
     the functionalities are extended with the properties sent, 
     this is done for each of the pages
    
    */

  return (
    <div className='ItemForm'>
      {/**
         In the following code fragment, a header or kind of header is rendered 
         that persists in the registration pages
      */}

      {display === false && (
        <div className='ItemForm-title'>
          <Link to={route} className='ItemForm-title-button'>
            <strong>{'< '}</strong>back
          </Link>
          <div className='ItemForm-title-description'>
            <p className='ItemForm-title-seccion'>{`Page ${seccionNumber}/03`}</p>
            <p className='ItemForm-title-seccion Color-black'>
              {seccionInfo}
            </p>
          </div>
        </div>
      )}
      <div className='ItemForm-container'>
        <h1 className='ItemForm-container-title'>{title}</h1>
        <p className='ItemForm-container-description'>
          {description}
        </p>
      </div>

      {display === true && (
        <>
          <strong>Register</strong>
          <Card key={card[0].id} card={card[0]} img={logoDeveloper} />
          <Card key={card[1].id} card={card[1]} img={logoBusiness} />

          <div className='ItemForm-login'>
            <p>-- or --</p>
            <Link to='/register'>
              <strong>LogIn</strong>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemForm;
