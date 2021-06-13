import React, { useState } from 'react';
import ItemForm from './ItemForm';
import TextBox from './TextBox';
import Button from './Button';
import { expression } from '../assets/utils/expressionesRegular';
import '../assets/styles/CheckProfile.css';

const CheckProfile = (props) => {
  const [form, setForm] = useState({
    cardNumber: '',
    securityCode: '',
  });
  const data = {
    title: 'Verifica tu perfil',
    description:
      'Para poder de que se trata ingresa una cuenta real, necesitamos la siguiente informacion',
    display: false,
    option: 'Guardar y continuar',
    seccionNumber: '03',
    seccionInfo: 'Personal info',
    route: '/end-profile',
  };
  const [disabledButton, setDisabledButton] = useState(true);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('presionado');
    setTimeout(() => {
      props.history.push('/check-profile');
    }, 500);
  };

  return (
    <div className='CheckProfile'>
      <ItemForm data={data} />
      <form className='form' onSubmit={handleOnSubmit}>
        <TextBox
          title='Card Numbre'
          name='cardNumbre'
          type='text'
          placeholder='Enter your card number'
          value={form.cardNumber}
          required='required'
          form={form}
          setForm={setForm}
          setDisabledButton={setDisabledButton}
          expressionRegular={expression.cardNumber}
        />
        <TextBox
          title='Security code'
          name='securityCode'
          type='password'
          placeholder='Enter your security code'
          value={form.securityCode}
          required='required'
          form={form}
          setForm={setForm}
          setDisabledButton={setDisabledButton}
          expressionRegular={expression.nameUser}
        />
        <Button title={data.title} disableButton={disabledButton} />
      </form>
    </div>
  );
};

export default CheckProfile;
