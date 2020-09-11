import axios from 'axios';

import { GET_PLOT } from './types';

export const getPlot = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/plot');
    console.log(res);
    dispatch({
      type: GET_PLOT,
      payload: res,
    });
  } catch (err) {
    console.err(err);
  }
};
