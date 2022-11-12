import { getCharacters } from 'Api/Api.jsx';
import CharactersList from '../components/CharactersList/CharactersList.jsx';
import LoadButtons from 'components/LoadButtons/LoadButtons.jsx';
import { useEffect, useState } from 'react';
import Footer from 'components/Footer/Footer.jsx';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setpage] = useState('');

  useEffect(() => {
    getCharacters()
      .then(response => {
        setCharacters(response.data.results);
        setpage(response.data.info.next);
      })
      .catch(error => console.log('error'));
  }, []);

  const setNewCharacters = e => {
    setCharacters(e);
  };

  return (
    <>
      <CharactersList characters={characters} />
      <LoadButtons setNewCharacters={setNewCharacters} newPage={page} />
      <Footer />
    </>
  );
};

export default Characters;
