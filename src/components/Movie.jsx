import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  let navigate = useNavigate();

  return (
    <div
      className="result__container"
      key={movie.imdbID}
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
    >
      <figure className="movie__img__container">
        <img src={movie.Poster} alt="Movie Image" className="movie__img" />
      </figure>
      <div id="movie__description" className="movie__description">
        <h2 className="movie__title">
          <i> {movie.Title} </i>
        </h2>
        <h2 className="movie__year">{movie.Year}</h2>
      </div>
    </div>
  );
};

export default Movie;
