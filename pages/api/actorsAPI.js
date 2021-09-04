import axios from 'axios';

export default async (req, res) => {
  const URL = `https://api.themoviedb.org/3/movie/${req.body}/credits?api_key=${process.env.API_KEY}&language=en-US`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data });
};
