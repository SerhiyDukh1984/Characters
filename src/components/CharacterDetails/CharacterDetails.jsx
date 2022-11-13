import { getCharactersById } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const location = useLocation();
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    if (characterId) {
      getCharactersById(characterId)
        .then(response => setCharacter(response.data))
        .catch(error => console.log('error'));
    }
  }, [characterId]);

  return (
    <>
      <Link to={location.state ?? '/characters/'}>
        <button>Go Back</button>
      </Link>
      {character !== {} && (
        <section>
          <img src={character.image} alt="user" />
          <h1>{character.name}</h1>
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
