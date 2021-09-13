/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import { SERVER_BASE_URL } from '../../lib/utils/constants';

const MovieAPI = {
  getMovieById: (id) =>
    axios
      .get(
        `${SERVER_BASE_URL}${id}?api_key=${process.env.API_KEY}&append_to_response=videos%2Ccasts%2Crecommendations%2Cexternal_ids,images,release_dates`,
      )
      .catch((err) => err.response.status),

  getCastByMovieId: (id) =>
    axios
      .get(`${SERVER_BASE_URL}${id}/credits?api_key=${process.env.API_KEY}&language=en-US`)
      .catch((err) => err.response.status),

  getPopularMovies: (page = 1) =>
    axios.get(
      `${SERVER_BASE_URL}popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
    ),

  getTopRatedMovies: (page = 1) =>
    axios.get(
      `${SERVER_BASE_URL}top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
    ),

  getUpcomingMovies: (page = 1) =>
    axios.get(
      `${SERVER_BASE_URL}upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
    ),

  getUpcomingTrailer: (id) =>
    axios.get(`${SERVER_BASE_URL}${id}?api_key=${process.env.API_KEY}&append_to_response=videos`),

  getSearchMovieList: (search, page) =>
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`,
    ),

  getRecommendationByMovieID: (id) =>
    axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    ),
};

export default MovieAPI;
