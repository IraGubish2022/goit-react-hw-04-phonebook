import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Style from './FormPhoneBook.module.css';
//import PropTypes from 'prop-types';

const FormPhoneBook = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const NameInputFormId = uuidv4();
  const NumberInputFormId = uuidv4();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

        case 'number':
          setNumber(value);
          break;

          default:
            throw new Error("There isn't such option");
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

    return (
      <form onSubmit={handleSubmit} className={Style.form}>
        <label className={Style.formLabel} htmlFor={NameInputFormId}>
          Name
          <input
            id={NameInputFormId}
            className={Style.inputForm}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={Style.formLabel} htmlFor={NumberInputFormId}>
          Number
          <input
            id={NumberInputFormId}
            className={Style.inputForm}
            type="tel"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={Style.btnForm}>
          Add contact
        </button>
      </form>
    );
  }

export default FormPhoneBook;
