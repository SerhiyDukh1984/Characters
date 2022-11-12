import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getCharacters } from 'Api/Api';
import { getCharactersById } from 'Api/Api';
import s from './CharacterList.module.css';
import Footer from 'components/Footer/Footer';
import CharacterDetails from 'components/CharacterDetails/CharacterDetails';

const CharactersList = ({ characters }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [character, setCharacter] = useState({});
  console.log('🚀 ~ character', character);
  const [characterId, setCharacterId] = useState('');
  const qwe = character.id;

  // const getInfo = () => {
  //   // navigate(`/characters/${qwe}`);
  //   // getCharactersById(id)
  //   //   .then(response => response.data.results)
  //   //   .catch(error => console.log('error'));
  // };

  // useEffect(() => {
  //   // getInfo();
  //   // getCharactersById(characterId);
  //   // setCharacterId(characterId);
  //   // navigate(`/characters/${qwe}`);
  // }, [qwe]);

  return (
    <section className={s.section}>
      <ul className={s.list}>
        {characters !== undefined &&
          characters.map(character => (
            <li
              onClick={() => {
                // getInfo(character.id);
                setCharacter(character);
                // setCharacterId(character.id);
              }}
              key={character.id}
              className={s.item}
            >
              <Link to={`/characters`} state={location} className={s.link}>
                <img src={character.image} width="120" h="120" />
                <div className={s.card}>
                  <h1 className={s.text}>
                    <span className={s.decor}>- </span>
                    {character.name}
                  </h1>
                  <p>{character.status}</p>
                  <p>{character.species}</p>
                  <p>{character.id}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      <CharacterDetails qwe={qwe} />
    </section>
  );
};

export default CharactersList;
