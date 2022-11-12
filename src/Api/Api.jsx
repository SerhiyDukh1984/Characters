import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://rickandmortyapi.com/api/character';
const LOCATIONS_URL = 'https://rickandmortyapi.com/api/location';
const EPISODES_URL = 'https://rickandmortyapi.com/api/episode';

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

export const getEpisodes = e => {
  try {
    const response = axios.get(e === undefined ? EPISODES_URL : e);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCharactersById = id => {
  try {
    const response = axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

// getMoviesBySearch.propTypes = PropTypes.string.isRequired;
// getMovieInfo.propTypes = PropTypes.number.isRequired;
// getCredits.propTypes = PropTypes.number.isRequired;
// getReviews.propTypes = PropTypes.number.isRequired;
