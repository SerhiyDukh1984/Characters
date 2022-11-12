import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { getLocations } from 'Api/Api';
import LoadButtons from 'components/LoadButtons/LoadButtons';
import LocationList from '../components/Location/LocationList';
import Footer from 'components/Footer/Footer';
// import Navigation from 'components/Navigation/Navigation';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [page, setpage] = useState('');

  useEffect(() => {
    getLocations()
      .then(response => {
        setLocations(response.data.results);
        setpage(response.data.info.next);
      })
      .catch(error => console.log('error'));
  }, []);

  const setNewLocations = e => {
    setLocations(e);
  };
  return (
    <>
      <LocationList locations={locations} />
      <LoadButtons setNewLocations={setNewLocations} newPage={page} />
      <Footer />
    </>
  );
};

export default Locations;
