import axios from 'axios';

const PersonAPI = {
  getSearchMovieList: (search, page = 1) =>
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`,
    ),

  getSearchTvList: (search, page = 1) =>
    axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY}&language=en-US&page=${page}&query=${search}&include_adult=false`,
    ),

  getPersonList: (search, page = 1) =>
    axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${process.env.API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`,
    ),
};

export default PersonAPI;
