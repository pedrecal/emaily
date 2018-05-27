import axios from 'axios';
import { FETCH_USER } from './types';
// eslint-disable-next-line
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};
