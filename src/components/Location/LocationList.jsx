import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './LocationList.module.css';

const LocationList = ({ locations }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [locatione, setLocatione] = useState({});
  const [locationId, setLocationId] = useState('');

  useEffect(() => {
    navigate(`/locations/${locationId}`);
  }, [locationId, navigate]);

  return (
    <section className={s.section}>
      <ul className={s.list}>
        {locations !== undefined &&
          locations.map(loc => (
            <li
              onClick={() => {
                setLocatione(locatione);
                setLocationId(loc.id);
              }}
              key={loc.id}
              className={s.item}
            >
              <h1 className={s.title}>{loc.name}</h1>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default LocationList;
