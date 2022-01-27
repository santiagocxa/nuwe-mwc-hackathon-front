import React, { useState } from 'react';
import ItemForm from './ItemForm';
import TextBox from './TextBox';
import Button from './Button';
import { expression } from '../assets/utils/regularExpressions';
import '../assets/styles/CheckProfile.css';

const CheckProfile = (props) => {
  const [form, setForm] = useState({
    cardNumber: '',
    securityCode: '',
  });
  const data = {
    title: 'Check your profiles',
    description:
      'To be able to enter a real account, we need the following information',
    display: false,
    option: 'Save and Continue',
    seccionNumber: '03',
    seccionInfo: 'Personal info',
    route: '/end-profile',
  };
  const [disabledButton, setDisabledButton] = useState(true);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      props.history.push('/welcome');
    }, 500);
  };

  /**
    In the following component the component of the text boxes is reused and 
    the functionalities are extended with the sent properties, 
    this is done for each of the pages  
  */

  return (
    <div className='CheckProfile'>
      <ItemForm data={data} />
      <form className='form' onSubmit={handleOnSubmit}>
        <TextBox
          title='Card Number'
          name='cardNumber'
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
          expressionRegular={expression.securityCode}
        />
        <Button title={data.title} disableButton={disabledButton} />
      </form>
    </div>
  );
};

export default CheckProfile;
