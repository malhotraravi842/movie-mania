import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../lib/api";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState("");
  const params = useParams();
  useEffect(() => {
    getMovieDetail(params.id)
      .then((res) => {
        console.log(res);
        setMovieDetail(res && res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="moviedetail">
      {movieDetail && (
        <div className="moviedetail__container">
          <img
            className="moviedetail__poster"
            src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
            alt={movieDetail.id}
          />
          <div class="moviedetail__info">
            <h1>{movieDetail.title}</h1>
            <h2>Release: {movieDetail.release_date}</h2>
            <hr />
            <h3>
              Runtime: <span>{movieDetail.runtime} min</span>
            </h3>
            <h3>
              Genre:{" "}
              <span>
                {movieDetail.genres &&
                  movieDetail.genres.map((genre, i) => {
                    if (i === movieDetail.genres.length) return genre.name;

                    return genre.name + ", ";
                  })}
              </span>
            </h3>
            <h3>Overview:</h3>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
