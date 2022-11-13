import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './ButtonGoBack.module.css';

const BtnGoBack = ({ id }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [nav, setNav] = useState('');

  const handleClick = () => {
    navigate(`${nav}`);
  };

  useEffect(() => {
    if (location.pathname === `/characters/${id}`) {
      setNav('/characters');
    }

    if (location.pathname === `/locations/${id}`) {
      setNav('/locations');
    }

    if (location.pathname === `/episodes/${id}`) {
      setNav('/episodes');
    }
  }, [id, location]);

  return (
    <>
      <button type="button" className={s.button} onClick={handleClick}>
        Go Back
      </button>
    </>
  );
};

export default BtnGoBack;
