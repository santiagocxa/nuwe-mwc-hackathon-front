import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import { OrderCountry } from '../assets/utils/OrderCountry';
import '../assets/styles/TextBox.css';

const TextBox = (props) => {
  const [dataPhoneCode, setDataPhoneCode] = useState();

  const [codeCountry, setCodeCountry] = useState({
    code: '',
  });

  const [inputValidation, setInputValidation] = useState({
    passed: '',
    openMessage: '',
  });

  const {
    title,
    name,
    type,
    placeholder,
    required,
    value,
    expressionRegular,
    form,
    setForm,
    setDisabledButton,
    countryCodeOpen,
  } = props;

  const API = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    const getPhoneCode = async () => {
      const data = await fetch(API).then((res) => res.json());
      setDataPhoneCode(data.sort(OrderCountry));
    };
    getPhoneCode();
  }, [API]);

  /**
    The following function captures the events in the code list
    and in the text boxes to obtain the data for the state
  */
  const onChange = (event) => {
    validationTextBox(event.target.value);
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setCodeCountry({
      ...codeCountry,
      code: event.target.value,
    });
  };

  /**
    With the following function we help ourselves to perform the validation
    of the fields as our user enters the information
    our function does the evaluation of the correct formats

    We set some properties that will help us later to render
    error messages and approval icons with the help of css
  */

  const validationTextBox = (value) => {
    if (expressionRegular) {
      if (expressionRegular.test(value)) {
        setInputValidation({
          passed: ' Passed',
          openMessage: '',
        });
        setDisabledButton(false);
      } else {
        setInputValidation({
          openMessage: ' Stop',
          passed: '',
        });
        setDisabledButton(true);
      }
    }
  };

  return (
    <div className='TextBox'>
      <p className='TextBox-description'>{title}</p>
      <div className='TextBox-input'>
        <input
          className='TextBox-info'
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
        />
        <div
          className={`TextBox-input-icon ${inputValidation.passed}`}
        >
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
        <div
          className={`TextBox-input-icon${inputValidation.openMessage}`}
        >
          <FontAwesomeIcon icon={faBan} />
        </div>

        {/**
          This code snippet we add the utility of our
          drop-down list to choose the telephone code of
          our country.

          With a little validation we managed to use the same component
          of the text boxes only that we extend its functionality
          
        */}
        {countryCodeOpen === true && dataPhoneCode != null && (
          <select
            className='TextBox-phone'
            name='phone'
            onChange={onChange}
          >
            {dataPhoneCode.map((item) => (
              <option key={item.cca3}>
                {`${item.idd.root}${item.idd.suffixes}  ${item.name.common} `}
              </option>
            ))}
          </select>
        )}
      </div>
      <p className={`TextBox-error${inputValidation.openMessage}`}>
        INCORRECT FORMAT
      </p>
    </div>
  );
};

export default TextBox;
