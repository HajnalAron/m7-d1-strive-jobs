import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

export default function Favorites() {
  const jobs = useSelector((state) => state.favorite.jobs);
  return (
    <div className="d-flex flex-column justify-content-center m-5">
      <div className="d-flex flex-column m-5">
        {jobs.length > 0 && jobs ? (
          jobs.map((job) => {
            return <FavoriteCard job={job} />;
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}
