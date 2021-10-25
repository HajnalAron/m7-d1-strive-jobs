import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { getJobsAction } from "../actions/index.js";
import { getJobs } from "../Utilites/API.js";
import JobCard from "./JobCard.jsx";

function MainPageJobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs);
  const [isLoading, setLoading] = useState(true);
  const [isSearchExpanded, setSearchExpanded] = useState(false);
  const [baseSearchQuery, setBaseQuery] = useState("");
  const [searchText, setSearchText] = useState("");
  const [advancedSearch, setAdvancedSearch] = useState({});

  const baseSearch = async (e, a, b) => {
    e.preventDefault();
    const search = { [`${a}`]: b };
    dispatch(getJobsAction(search));
  };

  useEffect(() => {
    dispatch(getJobsAction());
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center m-5">
      <Link to="/favorites">
        <h1>Favs</h1>
      </Link>
      <form
        onSubmit={(e) => {
          baseSearch(e, baseSearchQuery, searchText);
        }}
      >
        <select
          name="queries"
          onChange={(e) => {
            setBaseQuery(e.target.value);
          }}
          id="queries"
        >
          <option value="search">search</option>
          <option value="title">title</option>
          <option value="category">category</option>
          <option value="company">company</option>
        </select>
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search..."
          type="text"
        ></input>
        <button>Search</button>
      </form>
      <button
        onClick={() => setSearchExpanded(!isSearchExpanded)}
        className="btn, btn-success"
      >
        Advanced search
      </button>
      {isSearchExpanded && (
        <div>
          <form>
            <select
              name="advanced"
              onChange={(e) => {
                setBaseQuery(e.target.value);
              }}
              id="advanced"
            >
              <option value="title">title</option>
              <option value="category">category</option>
              <option value="company">company</option>
            </select>
            <input
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search..."
              type="text"
            ></input>
            <select
              name="advanced"
              onChange={(e) => {
                setBaseQuery(e.target.value);
              }}
              id="advanced"
            >
              <option value="title">title</option>
              <option value="category">category</option>
              <option value="company">company</option>
            </select>
            <input
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search..."
              type="text"
            ></input>
            <select
              name="advanced"
              onChange={(e) => {
                setBaseQuery(e.target.value);
              }}
              id="advanced"
            >
              <option value="title">title</option>
              <option value="category">category</option>
              <option value="company">company</option>
            </select>
            <input
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search..."
              type="text"
            ></input>

            <button>Search</button>
          </form>
        </div>
      )}
      <div className="d-flex flex-column m-5">
        {jobs.length > 0 ? (
          jobs.map((job) => {
            return <JobCard job={job} />;
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default withRouter(MainPageJobs);
