import { getLocationById } from 'Api/Api';
import BtnGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LocationDetails = () => {
  const { locationId } = useParams();
  const [locations, setLocations] = useState({});
  let id = locationId;

  useEffect(() => {
    if (locationId) {
      getLocationById(locationId)
        .then(response => setLocations(response.data))
        .catch(error => console.log('error'));
    }
  }, [locationId]);

  return (
    <>
      <BtnGoBack id={id} />
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
