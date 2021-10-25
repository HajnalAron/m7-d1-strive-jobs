import { ADD_JOB_TO_FAVORITES, REMOVE_JOB_FROM_FAVORITES } from "../actions";
import { initialState } from "../store";

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_TO_FAVORITES: {
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    }
    case REMOVE_JOB_FROM_FAVORITES: {
      return {
        jobs: [state.jobs.filter((job) => job._id !== action.payload._id)]
      };
    }
    default:
      return state;
  }
};
