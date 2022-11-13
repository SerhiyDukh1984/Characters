import { getLocationById } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const LocationDetails = () => {
  const location = useLocation();
  const { locationId } = useParams();
  const [locations, setLocations] = useState({});

  useEffect(() => {
    if (locationId) {
      getLocationById(locationId)
        .then(response => setLocations(response.data))
        .catch(error => console.log('error'));
    }
  }, [locationId]);

  return (
    <>
      <Link to={location.state ?? '/locations'}>
        <button>Go Back</button>
      </Link>
      {locations !== {} && (
        <section>
          <h1>{locations.name}</h1>
          <ul>
            <li>Type: {locations.type}</li>
            <li>Dimension: {locations.dimension}</li>
            <li>Created: {locations.created}</li>
            <li>Id: {locations.id}</li>
          </ul>
        </section>
      )}
    </>
  );
};

export default LocationDetails;
