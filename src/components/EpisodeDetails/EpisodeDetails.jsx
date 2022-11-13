import { getEpisodeById } from 'Api/Api';
import BtnGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './EpisodeDetails.module.css';

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
        <section className={s.section}>
          <h1 className={s.title}>{episode.name}</h1>
          <ul className={s.list}>
            <li className={s.item}>
              <span>id: </span>
              {episode.id}
            </li>
            <li className={s.item}>
              <span>Episode: </span>
              {episode.episode}
            </li>
            <li className={s.item}>
              <span>Date: </span>
              {episode.air_date}
            </li>
            <li className={s.item}>
              <span>Created: </span>
              {episode.created}
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default EpisodeDetails;
