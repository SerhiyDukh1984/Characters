import { getEpisodes } from 'Api/Api';
import { useEffect, useState } from 'react';
import EpisodesList from 'components/EpisodesList/EpisodesList';
import LoadButtons from 'components/LoadButtons/LoadButtons';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setpage] = useState('');

  useEffect(() => {
    getEpisodes()
      .then(response => {
        setEpisodes(response.data.results);
        setpage(response.data.info.next);
      })
      .catch(error => console.log(error.message));
  }, []);

  const setNewEpisodes = e => {
    setEpisodes(e);
  };

  return (
    <>
      <EpisodesList episodes={episodes} />
      <LoadButtons setNewEpisodes={setNewEpisodes} newPage={page} />
    </>
  );
};

export default Episodes;
