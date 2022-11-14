import { getCharacters } from 'Api/Api';
import BtnGoBack from 'components/ButtonGoBack/ButtonGoBack';
import Filter from 'components/Filter/Filter';
import LoadButtons from 'components/LoadButtons/LoadButtons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './CharacterList.module.css';

const CharactersList = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState({});
  const [page, setpage] = useState('');
  const [character, setCharacter] = useState({});
  const [characterId, setCharacterId] = useState('');

  const keys = Object.keys(characters);

  const setNewCharacters = e => {
    setCharacters(e);
  };

  const goBack = e => {
    setCharacter(e);
  };

  const setFilteredCharacters = e => {
    setCharacters(e);
  };

  useEffect(() => {
    getCharacters()
      .then(response => {
        setCharacters(response.data.results);
        setpage(response.data.info.next);
      })
      .catch(error => console.log(error.message));
  }, [character]);

  useEffect(() => {
    navigate(`/characters/${characterId}`);
  }, [characterId, navigate]);

  return (
    <>
      <BtnGoBack keys={keys} goBack={goBack} />

      <Filter setFilteredCharacters={setFilteredCharacters} />
      <section className={s.section}>
        {keys.length !== 0 && (
          <ul className={s.list}>
            {characters.map(character => (
              <li
                onClick={() => {
                  // setCharacter(character);
                  setCharacterId(character.id);
                }}
                key={character.id}
                className={s.item}
              >
                <div className={s.card}>
                  <img src={character.image} alt="user" className={s.image} />

                  <h1 className={s.title}>{character.name}</h1>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      {keys.length >= 20 && (
        <LoadButtons setNewCharacters={setNewCharacters} newPage={page} />
      )}
    </>
  );
};

export default CharactersList;
