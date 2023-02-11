import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <div className="dashboard__cards">
        {data ? (
          data.map((movie) => (
            <div key={movie.id} className="moviecard">
              <Link to={`/detail/${movie.id}`}>
                <img
                  className="moviecard__poster"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.id}
                />
              </Link>
            </div>
          ))
        ) : (
          <h1>No Records Found</h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
