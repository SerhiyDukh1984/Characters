import { getCharactersById } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const CharacterDetails = ({ qwe }) => {
  const navigate = useNavigate();
  console.log('🚀 ~ qwe', qwe);
  const [a, setA] = useState({});

  const getInfo = () => {
    navigate(`/characters/${qwe}`);
    getCharactersById(qwe)
      .then(response => response.data.results)
      .catch(error => console.log('error'));
  };

  useEffect(() => {
    getInfo();
  }, [qwe]);

  return (
    <>
      <h1>hello</h1>
      {/* {!character && (
        <section>
          <img src={character.image} />
          <h1>{character.name}</h1>
          <ul>
            <li>Location: {character.location.name}</li>
            <li>Spesies: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Status: {character.status}</li>
            <li>Episodes: {character.episode.length}</li>
            <li>Created: {character.created}</li>
          </ul>
        </section>
      )} */}
    </>
  );
};

export default CharacterDetails;
