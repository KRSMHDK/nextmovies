/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

const TvAPI = {
  getPopularTv: (page = 1) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
    ),
  getTvById: (id) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&append_to_response=videos%2Ccasts%2Crecommendations%2Cexternal_ids,images,content_ratings`,
    ),
  getCastByTvId: (id) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${process.env.API_KEY}&language=en-US`,
    ),

  getSimilarMovieByTvId: (id) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    ),

  getTvAiringToday: (page = 1) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
    ),

  getOnTv: (page = 1) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
    ),

  getTopRatedTv: (page = 1) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`,
    ),
};

export default TvAPI;
