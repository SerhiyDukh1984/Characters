import { getCharacters, getEpisodes, getLocations } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import s from './LoadButtons.module.css';

const LoadButtons = ({
  setNewEpisodes,
  newPage,
  setNewLocations,
  setNewCharacters,
}) => {
  const location = useLocation();
  const [nextPage, setNextPage] = useState(newPage);
  const [prevPage, setPrevPage] = useState(null);
  const [numberOfPage, setNumberOfPage] = useState(1);

  useEffect(() => {
    setNextPage(newPage);
  }, [newPage]);

  const handleClickMore = e => {
    e.preventDefault();

    if (location.pathname === '/characters/') {
      getCharacters(nextPage)
        .then(response => {
          setNewCharacters(response.data.results);
          setNextPage(response.data.info.next);
          setPrevPage(response.data.info.prev);
          setNumberOfPage(numberOfPage + 1);
        })
        .catch(error => console.log('error'));
    } else if (location.pathname === '/locations/') {
      getLocations(nextPage)
        .then(response => {
          setNewLocations(response.data.results);
          setNextPage(response.data.info.next);
          setPrevPage(response.data.info.prev);
          setNumberOfPage(numberOfPage + 1);
        })
        .catch(error => console.log('error'));
    } else {
      getEpisodes(nextPage)
        .then(response => {
          setNewEpisodes(response.data.results);
          setNextPage(response.data.info.next);
          setPrevPage(response.data.info.prev);
          setNumberOfPage(numberOfPage + 1);
        })
        .catch(error => console.log('error'));
    }
  };

  const handleClickBack = e => {
    e.preventDefault();

    if (location.pathname === '/characters/') {
      getCharacters(prevPage)
        .then(response => {
          setNewCharacters(response.data.results);
          setNextPage(response.data.info.next);
          setPrevPage(response.data.info.prev);
          setNumberOfPage(numberOfPage - 1);
        })
        .catch(error => console.log('error'));
    } else if (location.pathname === '/locations/') {
      getLocations(prevPage)
        .then(response => {
          setNewLocations(response.data.results);
          setNextPage(response.data.info.next);
          setPrevPage(response.data.info.prev);
          setNumberOfPage(numberOfPage - 1);
        })
        .catch(error => console.log('error'));
    } else {
      getEpisodes(prevPage)
        .then(response => {
          setNewEpisodes(response.data.results);
          setNextPage(response.data.info.next);
          setPrevPage(response.data.info.prev);
          setNumberOfPage(numberOfPage - 1);
        })
        .catch(error => console.log('error'));
    }
  };

  return (
    <section className={s.section}>
      <p className={s.page}>Page: {numberOfPage}</p>
      <div className={s.load}>
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
      </div>
    </section>
  );
};

export default LoadButtons;
