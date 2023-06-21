import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, userInput, movieList }) => {
  let navigate = useNavigate();

  return (
    <div
      className="movie__result__container"
      key={movie.imdbID}
      onClick={() =>
        navigate(`/movie/${userInput}/${movie.imdbID}`, {
          state: { movieList },
        })
      }
    >
      <figure className="movie__img__container">
        <img src={movie.Poster} alt="Movie Image" className="movie__img" />
        {movie.Type === "movie" ? (
          <figure className="movie__genre__container movie--genre">
            <h3 className="movie--type">{movie.Type}</h3>
          </figure>
        ) : (
          <figure className="movie__genre__container series--genre">
            <h3 className="movie--type">{movie.Type}</h3>
          </figure>
        )}
      </figure>

      <h2 className="movie__title">
        <i> {movie.Title} </i>
      </h2>
      <h2 className="movie__year">
        <span className="calendar__icon">
          <FontAwesomeIcon icon={"calendar"} />
        </span>
        {movie.Year}
      </h2>
    </div>
  );
};

export default Movie;
