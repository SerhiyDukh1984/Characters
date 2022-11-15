import { getCharactersById } from 'Api/Api';
import BtnGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './CharacterDetails.module.css';

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});
  let id = characterId;

  useEffect(() => {
    if (characterId) {
      getCharactersById(characterId)
        .then(response => setCharacter(response.data))
        .catch(error => console.log(error.message));
    }
  }, [characterId]);

  return (
    <>
      <BtnGoBack id={id} />

      {character.name && (
        <section className={s.section}>
          <img src={character.image} alt="user" className={s.image} />
          <h1 className={s.title}>{character.name}</h1>
          <ul className={s.list}>
            <li className={s.item}>
              <span>Spesies: </span>
              {character.species}
            </li>
            <li className={s.item}>
              <span>Gender: </span>
              {character.gender}
            </li>
            <li className={s.item}>
              <span>Status: </span>
              {character.status}
            </li>
            <li className={s.item}>
              <span>Created: </span>
              {character.created}
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default CharacterDetails;
