import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieInfo = () => {
  const { imdbID } = useParams();
  const [movieSelected, setMovieSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;

  async function fetchSelectedMovie(imdbID) {
    setLoading(true);

    try {
      const { data } = await axios.get(`${url}?i=${imdbID}&apikey=${apiKey}`);
      console.log("data", data);
      setMovieSelected(data);
      console.log("movieSelected", movieSelected);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (imdbID !== "") {
      fetchSelectedMovie(imdbID);
    }
  }, [imdbID]);

  return (
    <div className="movie__body">
      <div className="movie__container">
        <div className="row">
          <div className="movie__selected--top">
            <Link to="/" className="movie__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/" className="movie__link">
              <h2 className="movie__selected--title--top">Movies</h2>
            </Link>
          </div>
          <div className="movie__selected">
            {movieSelected && (
              <>
                <figure className="movie__selected--figure">
                  <img
                    src={movieSelected.Poster}
                    alt="Movie Image"
                    className="movie__selected--img"
                  ></img>
                </figure>
                <div className="movie__selected--description">
                  <h2 className="movie__selected--title">
                    {movieSelected.Title}
                  </h2>
                  <h3 className="movie__selected--year">
                    {movieSelected.Year}
                  </h3>
                  <h3 className="movie__selected--runtime">
                    {movieSelected.Runtime}
                  </h3>
                  <div className="movie__selected--plot">
                    {movieSelected.Plot}
                  </div>
                  <h2 className="movie__selected--director">
                    Director: {movieSelected.Director}
                  </h2>
                  <h2 className="movie__selected--writer">
                    Writers: {movieSelected.Writer}
                  </h2>
                  <h2 className="movie__selected--actor">
                    Actors: {movieSelected.Actors}
                  </h2>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
