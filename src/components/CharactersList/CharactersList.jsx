import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './CharacterList.module.css';

const CharactersList = ({ characters }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [character, setCharacter] = useState({});
  const [characterId, setCharacterId] = useState('');

  useEffect(() => {
    navigate(`/characters/${characterId}`);
  }, [characterId, navigate]);

  return (
    <section className={s.section}>
      <ul className={s.list}>
        {characters.map(character => (
          <li
            onClick={() => {
              setCharacter(character);
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
    </section>
  );
};

export default CharactersList;
