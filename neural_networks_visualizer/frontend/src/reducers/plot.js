import { GET_PLOT } from '../actions/types';

const initialState = {
  plot: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PLOT:
      return {
        ...state,
        plot: payload,
      };
    default:
      return state;
  }
};
