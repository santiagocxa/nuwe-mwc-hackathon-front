import React, { useState } from 'react';
import ItemForm from './ItemForm';
import TextBox from './TextBox';
import Button from './Button';
import { expression } from '../assets/utils/regularExpressions';
import '../assets/styles/EndProfile.css';

const EndProfile = (props) => {
  const [form, setForm] = useState({
    phoneNumber: '',
    address: '',
    country: '',
  });

  const [disabledButton, setDisabledButton] = useState(true);

  const data = {
    title: 'Complete your profile',
    description:
      'In order to check what it is about entering a real account, we need the following information',
    display: false,
    seccionNumber: '02',
    seccionInfo: 'Personal info',
    option: 'Save and Continue',
    route: '/register',
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      props.history.push('/check-profile');
    }, 500);
  };

  /**
     In the following component, the text box component is reused and 
     the functionalities are extended with the sent properties, 
     this is done for each of the pages
    
    */

  return (
    <div className='EndProfile'>
      <ItemForm data={data} />
      <form className='form' onSubmit={handleOnSubmit}>
        <TextBox
          title='Phone Number'
          name='phoneNumber'
          type='text'
          placeholder='00000'
          value={form.nameUser}
          required='required'
          form={form}
          setForm={setForm}
          setDisabledButton={setDisabledButton}
          expressionRegular={expression.phoneNumber}
          countryCodeOpen={true}
        />
        <TextBox
          title='Address'
          name='address'
          type='text'
          placeholder='Enter your address'
          value={form.address}
          required='required'
          form={form}
          setForm={setForm}
          setDisabledButton={setDisabledButton}
          expressionRegular={expression.address}
        />
        <TextBox
          title='Country'
          name='country'
          type='text'
          placeholder='Enter your country'
          value={form.country}
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

export default EndProfile;
