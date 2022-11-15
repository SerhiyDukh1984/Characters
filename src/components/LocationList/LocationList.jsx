import Footer from 'components/Footer/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './LocationList.module.css';

const LocationList = ({ locations }) => {
  console.log('🚀 ~ locations', locations.length);
  const navigate = useNavigate();
  const [locatione, setLocatione] = useState({});
  const [locationId, setLocationId] = useState('');

  useEffect(() => {
    navigate(`/locations/${locationId}`);
  }, [locationId, navigate]);

  return (
    <>
      {locations.length !== 0 && (
        <section className={s.section}>
          <ul className={s.list}>
            {locations.map(loc => (
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
          <Footer />
        </section>
      )}
    </>
  );
};

export default LocationList;
