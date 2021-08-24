import React, { useState } from 'react';
import './style.css';

import validateEmail from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Email, name, or message is invalid');
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form className='form'>
        <input
          value={name}
          name='emnameil'
          onChange={handleInputChange}
          type='text'
          placeholder='name'
        />
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='email'
        />
        <input
          value={message}
          name='message'
          onChange={handleInputChange}
          type='text'
          placeholder='message'
        />
        <button type='button' onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
