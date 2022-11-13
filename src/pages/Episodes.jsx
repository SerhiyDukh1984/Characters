import { getEpisodes } from 'Api/Api';
import { useEffect, useState } from 'react';
import EpisodesList from 'components/EpisodesList/EpisodesList';
import LoadButtons from 'components/LoadButtons/LoadButtons';
import Footer from 'components/Footer/Footer';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setpage] = useState('');

  useEffect(() => {
    getEpisodes()
      .then(response => {
        setEpisodes(response.data.results);
        setpage(response.data.info.next);
      })
      .catch(error => console.log('error'));
  }, []);

  const setNewEpisodes = e => {
    setEpisodes(e);
  };

  return (
    <>
      <EpisodesList episodes={episodes} />
      <LoadButtons setNewEpisodes={setNewEpisodes} newPage={page} />
      <Footer />
    </>
  );
};

export default Episodes;
