/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

const TvAPI = {
  getPopularTv: () =>
    axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    ),
};

export default TvAPI;
