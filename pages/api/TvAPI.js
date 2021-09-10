/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

const TvAPI = {
  getPopularTv: () =>
    axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    ),
  getTvById: (id) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&append_to_response=videos%2Ccasts%2Crecommendations%2Cexternal_ids,images`,
    ),
  getCastByTvId: (id) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${process.env.API_KEY}&language=en-US`,
    ),

  getSimilarMovieByTvId: (id) =>
    axios.get(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    ),
};

export default TvAPI;
