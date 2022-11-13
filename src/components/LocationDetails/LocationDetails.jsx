import { getLocationById } from 'Api/Api';
import BtnGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './LocationDetails.module.css';

const LocationDetails = () => {
  const { locationId } = useParams();
  const [locations, setLocations] = useState({});
  let id = locationId;

  useEffect(() => {
    if (locationId) {
      getLocationById(locationId)
        .then(response => setLocations(response.data))
        .catch(error => console.log('error'));
    }
  }, [locationId]);

  return (
    <>
      <BtnGoBack id={id} />
      {locations !== {} && (
        <section className={s.section}>
          <h1 className={s.title}>{locations.name}</h1>
          <ul className={s.list}>
            <li className={s.item}>
              <span>Id: </span>
              {locations.id}
            </li>
            <li className={s.item}>
              <span>Type: </span>
              {locations.type}
            </li>
            <li className={s.item}>
              <span>Dimension: </span>
              {locations.dimension}
            </li>
            <li className={s.item}>
              <span>Created: </span>
              {locations.created}
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default LocationDetails;
