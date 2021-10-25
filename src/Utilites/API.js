import axios from "axios";

const apiURL = "https://strive-jobs-api.herokuapp.com/jobs?";

export const getJobs = async (
  searchParams = {
    limit: 10,
    skip: 0,
    search: "",
    title: "",
    category: "",
    company: ""
  }
) => {
  try {
    let searchQuery = apiURL;
    Object.keys(searchParams).map((p) => {
      if (searchParams[p]) {
        searchQuery += `&${p}=${searchParams[p]}`;
      }
    });
    console.log(searchQuery);
    const req = await axios.get(searchQuery);
    if ((req.status = 200)) {
      return req.data;
    } else throw new Error();
  } catch (error) {
    console.error(error);
  }
};
