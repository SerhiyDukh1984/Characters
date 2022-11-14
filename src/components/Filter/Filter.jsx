import { useState } from 'react';
import s from './Filter.module.css';
import { getFilteredCharacters } from 'Api/Api';

const Filter = ({ setFilteredCharacters }) => {
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setUserName(value);
    }

    if (name === 'status') {
      setStatus(value);
    }
  };

  const reset = () => {
    setUserName('');
    setStatus('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (userName === '' || status === '') {
      return alert('Pleas, fill in both fields');
    }

    getFilteredCharacters(userName, status).then(response => {
      setFilteredCharacters(response.data.results);
    });

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Search:
        <label>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <input
            className={s.input}
            type="text"
            name="status"
            placeholder="status"
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Filter;
