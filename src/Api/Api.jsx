import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';
const LOCATIONS_URL = 'https://rickandmortyapi.com/api/location/';
const EPISODES_URL = 'https://rickandmortyapi.com/api/episode/';

export const getCharacters = e => {
  try {
    const response = axios.get(e === undefined ? BASE_URL : e);
    if (response.data === {}) {
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
    const response = axios.get(BASE_URL + `${id}`);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getEpisodeById = id => {
  try {
    const response = axios.get(EPISODES_URL + `${id}`);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getLocationById = id => {
  try {
    const response = axios.get(LOCATIONS_URL + `${id}`);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};
