import React, { useState } from 'react';
import ItemForm from './ItemForm';
import TextBox from './TextBox';
import Button from './Button';
import { expression } from '../assets/utils/expressionesRegular';
import '../assets/styles/Register.css';

const Register = (props) => {
  const [form, setForm] = useState({
    nameUser: '',
    email: '',
    password: '',
    disabledButton: true,
  });
  const [disabledButton, setDisabledButton] = useState(true);
  const data = {
    title: 'Register your account',
    display: false,
    seccionNumber: '01',
    seccionInfo: 'Personal info',
    option: 'Register acount',
    route: '/',
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('presionado');
    setTimeout(() => {
      props.history.push('/end-profile');
    }, 500);
  };

  return (
    <div className='Register'>
      <ItemForm data={data} />
      <form className='form' onSubmit={handleOnSubmit}>
        <TextBox
          title='First name'
          name='nameUser'
          type='text'
          placeholder='Enter Name User'
          value={form.nameUser}
          required='required'
          form={form}
          setForm={setForm}
          setDisabledButton={setDisabledButton}
          expressionRegular={expression.nameUser}
        />
        <TextBox
          title='Email address'
          form={form}
          setForm={setForm}
          setDisabledButton={setDisabledButton}
          name='email'
          type='text'
          placeholder='example@email.com'
          value={form.email}
          required='required'
          expressionRegular={expression.email}
        />
        <TextBox
          title='Password'
          form={form}
          setForm={setForm}
          setDisabledButton={setDisabledButton}
          name='password'
          type='password'
          placeholder='******'
          value={form.password}
          required='required'
          expressionRegular={expression.password}
        />

        <div className='Check'>
          <input
            className='Check-checkbox'
            type='checkbox'
            required='required'
          />
          <p className='Check-description'>
            Acepto los términos y condiciones
          </p>
        </div>
        <Button title={data.title} disableButton={disabledButton} />
      </form>
    </div>
  );
};

export default Register;
