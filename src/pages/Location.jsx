import { useEffect, useState } from 'react';
import { getLocations } from 'Api/Api';
import LoadButtons from 'components/LoadButtons/LoadButtons';
import LocationList from '../components/LocationList/LocationList';
import Footer from 'components/Footer/Footer';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [page, setpage] = useState('');

  useEffect(() => {
    getLocations()
      .then(response => {
        setLocations(response.data.results);
        setpage(response.data.info.next);
      })
      .catch(error => console.log(error.message));
  }, []);

  const setNewLocations = e => {
    setLocations(e);
  };
  return (
    <>
      {locations.length !== 0 && (
        <>
          <LocationList locations={locations} />
          <LoadButtons setNewLocations={setNewLocations} newPage={page} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Locations;
