import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/TextBox.css';

const TextBox = (props) => {
  const [dataPhoneCode, setDataPhoneCode] = useState();
  const [codePhoneContry, setCodePhoneContry] = useState({
    code: false,
    className: '',
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
    codeNumberPhone,
    expressionRegular,
    form,
    setForm,
    setDisabledButton,
  } = props;

  if (codeNumberPhone) {
    setCodePhoneContry({
      code: codeNumberPhone,
      className: '--select',
    });
  }
  const API = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    const getPhoneCode = async () => {
      const data = await fetch(API).then((res) => res.json());
      setDataPhoneCode(data);
    };
    getPhoneCode();
  }, [API]);

  const onChange = (event) => {
    validationTextBox(event.target.value);
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const validationTextBox = (value) => {
    if (expressionRegular) {
      if (expressionRegular.test(value)) {
        setInputValidation({
          passed: ' Passed',
          openMessage: '',
        });
        setDisabledButton(false)
      } else {
        setInputValidation({
          openMessage: ' Stop',
          passed: '',
        });
        setDisabledButton(true)
      }
    }
  };

  return (
    <div className='TextBox'>
      <p className='TextBox-description'>{title}</p>
      <div className='TextBox-input'>
        <input
          className={'TextBox-info'}
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
      </div>
      <p className={`TextBox-error${inputValidation.openMessage}`}>
        Enter a valid format
      </p>

      {codePhoneContry.code === true && dataPhoneCode != null && (
        <select
          className='TextBox-phone'
          value={dataPhoneCode}
          name='phone'
          onChange={onChange}
        >
          {dataPhoneCode.map((item) => (
            <option key={item.name} value={item.name}>
              {` +${item.callingCodes}  ${item.name}`}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default TextBox;
