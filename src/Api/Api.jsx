import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://rickandmortyapi.com/api/character';
const LOCATIONS_URL = 'https://rickandmortyapi.com/api/location';

export const getCharacters = e => {
  try {
    const response = axios.get(e === undefined ? BASE_URL : e);
    if (response.results === {}) {
      throw new Error('error');
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const getLocations = e => {
  try {
    const response = axios.get(e === undefined ? LOCATIONS_URL : e);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

// export const getLocations = query => {
//   return axios('https://rickandmortyapi.com/api/location', {
//     // params: {
//     //   query: query,
//     // },
//   });
// };

// export const getMovieInfo = id => {
//   try {
//     const response = axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
//     if (response.results === {}) {
//       throw new Error('error');
//     }

//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getCredits = id => {
//   try {
//     const response = axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`);

//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getReviews = id => {
//   try {
//     const response = axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// getMoviesBySearch.propTypes = PropTypes.string.isRequired;
// getMovieInfo.propTypes = PropTypes.number.isRequired;
// getCredits.propTypes = PropTypes.number.isRequired;
// getReviews.propTypes = PropTypes.number.isRequired;
