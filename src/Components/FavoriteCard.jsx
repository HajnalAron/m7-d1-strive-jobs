import parse from "html-react-parser";
import { Button, Card } from "react-bootstrap";
import { removeFromFavoritesAction } from "../actions";
import { useDispatch } from "react-redux";

function FavoriteCard({ job }) {
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column mx-5">
      {job && (
        <Card key={job._id} className="text-center  mb-5">
          <Card.Header>{job.category}</Card.Header>
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Text>
              <div>
                <div>Location: {job.candidate_required_location}</div>
                <div>Category: {job.category}</div>
                <div>Company: {job.company_name}</div>
                <div>Type of Job: {job.job_type}</div>
                <div>Salary: {job.salary}</div>
                <div>Description: {parse(job.description)}</div>
                <button
                  onClick={() => {
                    dispatch(removeFromFavoritesAction(job));
                  }}
                >
                  Remove from Favorites
                </button>
              </div>
            </Card.Text>
            <a href={job.url}>
              <Button variant="primary">More Info</Button>
            </a>
          </Card.Body>
          <Card.Footer className="text-muted">
            Published: {new Date(job.publication_date).toLocaleDateString()}
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}

export default FavoriteCard;
