import axios from "axios";

export const ADD_JOB_TO_FAVORITES = "ADD_JOB_TO_FAVORITES";
export const REMOVE_JOB_FROM_FAVORITES = "REMOVE_JOB_FROM_FAVORITES";
export const GET_JOBS = "GET_JOBS";

export const addToFavoritesAction = (job) => ({
  type: ADD_JOB_TO_FAVORITES,
  payload: job
});

export const removeFromFavoritesAction = (job) => ({
  type: REMOVE_JOB_FROM_FAVORITES,
  payload: job
});

export const getJobsAction = (
  searchParams = {
    limit: 10,
    skip: 0,
    search: "",
    title: "",
    category: "",
    company: ""
  }
) => {
  return async (dispatch, getState) => {
    try {
      const apiURL = "https://strive-jobs-api.herokuapp.com/jobs?";
      let searchQuery = apiURL;
      Object.keys(searchParams).map((p) => {
        if (searchParams[p]) {
          searchQuery += `&${p}=${searchParams[p]}`;
        }
      });
      console.log(searchQuery);
      const req = await axios.get(searchQuery);
      if ((req.status = 200)) {
        console.log(req.data.data);
        dispatch({
          type: GET_JOBS,
          payload: req.data.data
        });
      } else throw new Error();
    } catch (error) {
      console.error(error);
    }
  };
};
