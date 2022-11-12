import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getLocations } from 'Api/Api';
import { useEffect, useState } from 'react';
import s from './LocationList.module.css';

const LocationList = ({ locations }) => {
  const location = useLocation();

  return (
    <section className={s.section}>
      <ul className={s.list}>
        {locations !== undefined &&
          locations.map(loc => (
            <li key={loc.id} className={s.item}>
              <Link to={'/locations'} state={location}>
                <div>
                  <h1 className={s.title}>{loc.name}</h1>
                  <p className={s.text}>Dimension: {loc.dimension}</p>
                  <p className={s.text}>Type: {loc.type}</p>
                  <p className={s.text}>Residents: {loc.residents.length}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      {/* {prevPage && (
        <button type="button" className={s.button} onClick={handleClickBack}>
          Go back
        </button>
      )}
      {nextPage && (
        <button type="button" className={s.button} onClick={handleClickMore}>
          Load more
        </button>
      )} */}
    </section>
  );
};

export default LocationList;
