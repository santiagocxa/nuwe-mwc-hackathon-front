import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import '../assets/styles/ItemForm.css';

const ItemForm = (props) => {
  const {
    title,
    description,
    seccionNumber,
    seccionInfo,
    display,
    route,
  } = props.data || [];
  return (
    <div className='ItemForm'>
      {display === false && (
        <div className='ItemForm-title'>
          <Link to={route} className='ItemForm-title-button'>
            <strong>{'< '}</strong>back
          </Link>
          <div className='ItemForm-title-description'>
            <p className='ItemForm-title-seccion'>{`PASO ${seccionNumber}/03`}</p>
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
          <Card />
          <Card />
          <div className='ItemForm-login'>
            Ya tienes cuenta?
            <Link to='/register'>
              <strong> Inicia sesión</strong>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemForm;
