import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getLocations } from 'Api/Api';
import LocationList from '../components/Location/LocationList';
// import Navigation from 'components/Navigation/Navigation';

const Locations = () => {
  // const { movieId } = useParams();
  const [locations, setlocations] = useState([]);

  // useEffect(() => {
  //   getLocations()
  //     .then(response => {
  //       setlocations(response.data.ressults);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return <>{<LocationList locations={locations} />}</>;
};

export default Locations;
