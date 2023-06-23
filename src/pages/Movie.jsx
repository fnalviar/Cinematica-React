import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import NoPoster from "../exception/NoPoster";

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
        {movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt="Movie Image" className="movie__img" />
        ) : (
          <NoPoster />
        )}

        {movie.Type === "movie" ? (
          <figure className="movie__genre__container movie--genre">
            <h3 className="movie--type">{movie.Type}</h3>
          </figure>
        ) : movie.Type === "series" ? (
          <figure className="movie__genre__container series--genre">
            <h3 className="movie--type">{movie.Type}</h3>
          </figure>
        ) : (
          <figure className="movie__genre__container other--genre">
            <h3 className="movie--type">{movie.Type}</h3>
          </figure>
        )}
        <div className="movie--learn--more__container">
          <h2 className="learn--more">
            Learn More
            <FontAwesomeIcon icon={"arrow-right"} className="arrow--right" />
          </h2>
        </div>
      </figure>

      <div className="movie__title__container">
        <h3 className="movie__title">
          <i> {movie.Title} </i>
        </h3>
      </div>
      <div className="movie__year__container">
        <h3 className="movie__year">
          <span className="calendar__icon">
            <FontAwesomeIcon icon={"calendar"} />
          </span>
          {movie.Year}
        </h3>
      </div>
    </div>
  );
};

export default Movie;
