/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import { SERVER_BASE_URL } from '../../lib/utils/constants';

const MovieAPI = {
  getMovieById: (id) =>
    axios
      .get(`${SERVER_BASE_URL}${id}?api_key=${process.env.API_KEY}&language=en-US`)
      .catch((err) => err.response.status),

  getActorsByMovieId: (id) =>
    axios
      .get(`${SERVER_BASE_URL}${id}/credits?api_key=${process.env.API_KEY}&language=en-US`)
      .catch((err) => err.response.status),

  getPopularMovies: () =>
    axios.get(`${SERVER_BASE_URL}popular?api_key=${process.env.API_KEY}&language=en-US&page=1`),

  getTopRatedMovies: () =>
    axios.get(`${SERVER_BASE_URL}top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`),

  getUpcomingMovies: () =>
    axios.get(`${SERVER_BASE_URL}upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`),

  getUpcomingTrailer: (id) =>
    axios.get(`${SERVER_BASE_URL}${id}?api_key=${process.env.API_KEY}&append_to_response=videos`),
};

export default MovieAPI;