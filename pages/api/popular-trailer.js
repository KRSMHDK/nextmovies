import axios from 'axios';

export default async (req, res) => {
  const URL = `https://api.themoviedb.org/3/movie/${req.body}?api_key=${process.env.API_KEY}&append_to_response=videos`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data });
};
