import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getCharacters } from 'Api/Api';
import s from './MovieList.module.css';

const CharactersList = () => {
  const location = useLocation();
  const [characters, setcharacters] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    getCharacters()
      .then(response => {
        setcharacters(response.data.results);
        setNextPage(response.data.info.next);
      })
      .catch(error => console.log('error'));
  }, []);

  const handleClickMore = e => {
    e.preventDefault();

    getCharacters(nextPage)
      .then(response => {
        setcharacters(response.data.results);
        setNextPage(response.data.info.next);
        setPrevPage(response.data.info.prev);
      })
      .catch(error => console.log('error'));
  };

  const handleClickBack = e => {
    e.preventDefault();

    getCharacters(prevPage)
      .then(response => {
        setcharacters(response.data.results);
        setNextPage(response.data.info.next);
        setPrevPage(response.data.info.prev);
      })
      .catch(error => console.log('error'));
  };

  return (
    <section className={s.section}>
      <ul className={s.list}>
        {characters !== undefined &&
          characters.map(character => (
            <li key={character.id} className={s.item}>
              <Link to={'/characters'} state={location} className={s.link}>
                <img src={character.image} width="120" h="120" />
                <div className={s.card}>
                  <h1 className={s.text}>
                    <span className={s.decor}>- </span>
                    {character.name}
                  </h1>
                  <p>{character.status}</p>
                  <p>{character.species}</p>
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

export default CharactersList;
