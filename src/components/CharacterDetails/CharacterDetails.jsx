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
        .catch(error => console.log('error'));
    }
  }, [characterId]);

  return (
    <>
      <BtnGoBack id={id} />
      {character !== {} && (
        <section>
          <img src={character.image} alt="user" />
          <h1 className={s.title}>{character.name}</h1>
          <ul>
            <li>Spesies: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Status: {character.status}</li>
            <li>Created: {character.created}</li>
          </ul>
        </section>
      )}
    </>
  );
};

export default CharacterDetails;
