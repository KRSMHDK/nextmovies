/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import { SERVER_BASE_URL } from '../../lib/utils/constants.ts';

const MovieAPI = {
  getMovieById: (id) =>
    axios
      .get(`${SERVER_BASE_URL}${id}?api_key=${process.env.API_KEY}&language=en-US`)
      .catch((err) => err.response.status),

  getActorsByMovieId: (id) =>
    axios
      .get(`${SERVER_BASE_URL}${id}/credits?api_key=${process.env.API_KEY}&language=en-US`)
      .catch((err) => err.response.status),
};

export default MovieAPI;
