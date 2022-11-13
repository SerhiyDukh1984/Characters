import { getEpisodeById } from 'Api/Api';
import BtnGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState({});
  let id = episodeId;

  useEffect(() => {
    if (episodeId) {
      getEpisodeById(episodeId)
        .then(response => setEpisode(response.data))
        .catch(error => console.log('error'));
    }
  }, [episodeId]);

  return (
    <>
      <BtnGoBack id={id} />
      {episode !== {} && (
        <section>
          <h1>{episode.name}</h1>
          <ul>
            <li>Episode: {episode.episode}</li>
            <li>Date: {episode.air_date}</li>
            <li>Created: {episode.created}</li>
          </ul>
        </section>
      )}
    </>
  );
};

export default EpisodeDetails;
