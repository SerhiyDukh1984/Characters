import { useState } from 'react';
import { Link } from 'react-router-dom';
import LocationList from '../components/Location/LocationList';
import s from './Home.module.css';

const Home = () => {
  // useEffect(() => {
  //   getLocations()
  //     .then(response => {
  //       setlocations(response.data.ressults);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <>
      <h1 className={s.title}>---Hello world---</h1>
    </>
  );
};

export default Home;
