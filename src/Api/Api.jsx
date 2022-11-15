import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';
const LOCATIONS_URL = 'https://rickandmortyapi.com/api/location/';
const EPISODES_URL = 'https://rickandmortyapi.com/api/episode/';

export const getCharacters = async e => {
  try {
    const response = await axios.get(e === undefined ? BASE_URL : e);
    if (response.data === {}) {
      throw new Error('error');
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const getLocations = async e => {
  try {
    const response = await axios.get(e === undefined ? LOCATIONS_URL : e);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getEpisodes = async e => {
  try {
    const response = await axios.get(e === undefined ? EPISODES_URL : e);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCharactersById = async id => {
  try {
    const response = await axios.get(BASE_URL + `${id}`);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getEpisodeById = async id => {
  try {
    const response = await axios.get(EPISODES_URL + `${id}`);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getLocationById = async id => {
  try {
    const response = await axios.get(LOCATIONS_URL + `${id}`);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFilteredCharacters = async (name, status) => {
  try {
    const response = await axios.get(
      BASE_URL + `?name=${name}&status=${status}`
    );
    if (response.data === {}) {
      throw new Error('error');
    }

    return response;
  } catch (error) {
    throw error;
  }
};
