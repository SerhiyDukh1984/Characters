import { getEpisodeById } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const EpisodeDetails = () => {
  const location = useLocation();
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState({});

  useEffect(() => {
    if (episodeId) {
      getEpisodeById(episodeId)
        .then(response => setEpisode(response.data))
        .catch(error => console.log('error'));
    }
  }, [episodeId]);

  return (
    <>
      <Link to={location.state ?? '/episodes'}>
        <button>Go Back</button>
      </Link>
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
