import { initialState } from "../store";
import { GET_JOBS } from "../actions";

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS: {
      return {
        ...state,
        jobs: [...action.payload]
      };
    }
    default:
      return state;
  }
};
