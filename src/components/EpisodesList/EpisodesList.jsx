import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './EpisodesList.module.css';

const EpisodesList = ({ episodes }) => {
  const navigate = useNavigate();
  const [episodeId, setEpisodeId] = useState('');

  useEffect(() => {
    navigate(`/episodes/${episodeId}`);
  }, [episodeId, navigate]);

  return (
    <section className={s.section}>
      <ul className={s.list}>
        {episodes !== undefined &&
          episodes.map(episode => (
            <li
              onClick={() => {
                setEpisodeId(episode.id);
              }}
              key={episode.id}
              className={s.item}
            >
              <h1 className={s.title}>{episode.name}</h1>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default EpisodesList;
