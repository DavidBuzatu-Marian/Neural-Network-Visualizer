import axios from 'axios';
import { GET_PLOT } from './types';

export const getPlot = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/plot');

    dispatch({
      type: GET_PLOT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
