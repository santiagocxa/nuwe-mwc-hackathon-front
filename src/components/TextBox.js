import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/TextBox.css';

const TextBox = (props) => {
  const [dataPhoneCode, setDataPhoneCode] = useState();

  const [codeCountry, setCodeCountry] = useState({
    code: '',
  });

  /**
     En el siguiente estado seteamos las propiedades para mostrar los mensajes de error.
     por ingresar mal el formato en nuestras cajas de texto
    
    */
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

  /**
  La siguiente funcion optiene los datos de la api de indicativos telefonicos
  
  */
  const API = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    const getPhoneCode = async () => {
      const data = await fetch(API).then((res) => res.json());
      setDataPhoneCode(data);
    };
    getPhoneCode();
  }, [API]);

  /**
  La siguiente funcion captura los eventos en la lista de codigo 
  y en las cajas de texto para asi optener la data para el estado
  
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
  Con siguiente funcion nos ayudamos para realizar la validacion
  de los campos a medida que nuestro usuario ingresa la informacion
  nuestra funcion hace la evaluacion de los formatos correctos  

  Seteamos algunas propiedaddes que nos ayudaran luego a renderizar 
  los mensajes de error y los iconos de aprovado con ayuda de css
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

  /**
   Este componente se creo buscando ser reutilizado 
   y asi no crear mas codigo de el necesario, podemos usarlo
   cada ocacion que necesitemos cajas de texto en nuestos formularios
  */
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
          Este fragmento de codigo agregamos la utilidad de nuestra
          lista desplegable para elegir el indicativo telefonico de 
          nuestro pais.

          Con una pequeña validacion logramos usar el mismo componente
          de las cajas de texto solo que extendemos su funcionalidad
          
        */}
        {countryCodeOpen === true && dataPhoneCode != null && (
          <select
            className='TextBox-phone'
            value={codeCountry.code}
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
      <p className={`TextBox-error${inputValidation.openMessage}`}>
        Enter a valid format
      </p>
    </div>
  );
};

export default TextBox;
