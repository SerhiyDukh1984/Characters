import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getEpisodes } from 'Api/Api';
import { useEffect, useState } from 'react';
import s from './EpisodesList.module.css';
import LoadButtons from 'components/LoadButtons/LoadButtons';

const EpisodesList = ({ episodes }) => {
  const location = useLocation();

  return (
    <section className={s.section}>
      <ul className={s.list}>
        {episodes !== undefined &&
          episodes.map(episode => (
            <li key={episode.id} className={s.item}>
              <Link to={'/episodes'} state={location}>
                <h1 className={s.title}>{episode.name}</h1>
              </Link>
              <p className={s.text}>Episode: {episode.episode}</p>
              <p className={s.text}>Air date: {episode.air_date}</p>
              <p className={s.text}>Characters: {episode.characters.length}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default EpisodesList;
