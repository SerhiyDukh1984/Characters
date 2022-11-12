import { getCharactersById } from 'Api/Api';
import CharacterDetails from 'components/CharacterDetails/CharacterDetails';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// const CharacterInfo = () => {
//   const [character, setCharacter] = useState();
//   const location = useLocation();
//   console.log('🚀 ~ character', character);

//   return <>{character && <CharacterDetails character={character} />}</>;
// };

// export default CharacterInfo;
