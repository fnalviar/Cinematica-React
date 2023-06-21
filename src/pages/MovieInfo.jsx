import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Recommend from "../ui/Recommend.jsx";

const MovieInfo = () => {
  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;

  const { imdbID, userInput } = useParams();
  const location = useLocation();
  const movieList = location.state;
  const [movieSelected, setMovieSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchSelectedMovie(imdbID) {
    setLoading(true);

    try {
      const { data } = await axios.get(`${url}?i=${imdbID}&apikey=${apiKey}`);
      setMovieSelected(data);
      console.log("data at MovieInfo.jsx, ", data);
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
  }, []);

  return (
    <div className="movie__body">
      <div className="movie__container">
        <div className="row">
          <div className="movie__selected--top">
            <Link to={`/movies/${userInput}`} className="movie__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to={`/movies/${userInput}`} className="movie__link">
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

                  <div className="movie__selected--top__container">
                    <div className="movie__selected--lists__container">
                      <ul className="movie__selected--lists">
                        <li className="movie__selected--list movie__selected--year">
                          {movieSelected.Year}
                        </li>
                        <li className="movie__selected--list movie__selected--rated">
                          {movieSelected.Rated}
                        </li>
                        <li className="movie__selected--list movie__selected--runtime">
                          {movieSelected.Runtime}
                        </li>
                      </ul>
                    </div>

                    
                    {movieSelected.Ratings &&
                      movieSelected.Ratings.length > 0 && (
                        <div className="movie__selected--ratings__container">
                          <h4 className="movie__selected--ratings--title">
                            Ratings
                          </h4>
                          {parseFloat(movieSelected.Ratings[0].Value) >= 5 ? (
                            <FontAwesomeIcon
                              icon={"star"}
                              className="rating--star"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={"star-half-alt"}
                              className="rating--star"
                            />
                          )}
                          {movieSelected.Ratings[0].Value}
                        </div>
                      )}
                  </div>

                  {movieSelected.Genre && (
                    <div className="movie__selected--genre__container">
                      <ul className="genre__lists">
                        {movieSelected.Genre.split(", ").map((word, index) => (
                          <li key={index} className="genre__list">
                            {word}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

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
        <Recommend movieSelected={movieSelected} movieList={movieList} />
      </div>
    </div>
  );
};

export default MovieInfo;
