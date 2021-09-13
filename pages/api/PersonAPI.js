/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import { SERVER_BASE_URL } from '../../lib/utils/constants';

const PersonAPI = {
  getPersonById: (id) =>
    axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}&append_to_response=combined_credits`,
    ),
};

export default PersonAPI;
