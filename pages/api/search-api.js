import axios from 'axios';

export default async (req, res) => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&${req.body}&page=1&include_adult=false`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data });
};
