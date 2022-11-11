import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { getLocations } from 'Api/Api';
import { useEffect, useState } from 'react';
import s from './LocationList.module.css';

const LocationList = () => {
  // const locatione = useLocation();
  const [locations, setLocations] = useState([]);
  const [nextPage, setNextPage] = useState('');
  console.log('🚀 ~ nextPage', nextPage);
  const [prevPage, setPrevPage] = useState('');
  console.log('🚀 ~ prevPage', prevPage);

  useEffect(() => {
    getLocations()
      .then(response => {
        setLocations(response.data.results);
        setNextPage(response.data.info.next);
      })
      .catch(error => console.log('error'));
  }, []);

  const handleClickMore = e => {
    e.preventDefault();

    getLocations(nextPage)
      .then(response => {
        setLocations(response.data.results);
        setNextPage(response.data.info.next);
        setPrevPage(response.data.info.prev);
      })
      .catch(error => console.log('error'));
  };

  const handleClickBack = e => {
    e.preventDefault();

    getLocations(prevPage)
      .then(response => {
        setLocations(response.data.results);
        setNextPage(response.data.info.next);
        setPrevPage(response.data.info.prev);
      })
      .catch(error => console.log('error'));
  };
  return (
    <section className={s.section}>
      <ul className={s.list}>
        {locations !== undefined &&
          locations.map(location => (
            <li key={location.id} className={s.item}>
              <Link to={'/locations'} state={location}>
                <div>
                  <h1 className={s.title}>{location.name}</h1>
                  <p className={s.text}>Dimension: {location.dimension}</p>
                  <p className={s.text}>Type: {location.type}</p>
                  <p className={s.text}>
                    Residents: {location.residents.length}
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      {prevPage && (
        <button type="button" className={s.button} onClick={handleClickBack}>
          Go back
        </button>
      )}
      {nextPage && (
        <button type="button" className={s.button} onClick={handleClickMore}>
          Load more
        </button>
      )}
    </section>
  );
};

export default LocationList;
