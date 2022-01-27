import React, { useState } from 'react';
import ItemForm from './ItemForm';
import TextBox from './TextBox';
import Button from './Button';
import { expression } from '../assets/utils/regularExpressions';
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
    setTimeout(() => {
      props.history.push('/end-profile');
    }, 500);
  };

  /**
     En el siguiente componente se reutiliza el componente de las cajas de texto
     y se extienden las funsionalidades con las propiedades enviadas, 
     esto se realiza para cada unas de las paginas
    
    */

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
            I accept the terms and conditions
          </p>
        </div>
        <Button title={data.title} disableButton={disabledButton} />
      </form>
    </div>
  );
};

export default Register;
