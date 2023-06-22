import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Recommend from "../ui/Recommend.jsx";

const MovieInfo = () => {
  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;

  const { imdbID, userInput } = useParams();
  const movieList = useLocation().state;
  const [movieSelected, setMovieSelected] = useState([]);

  const [loading, setLoading] = useState(false);

  async function fetchSelectedMovie(imdbID) {
    setLoading(true);

    try {
      const { data } = await axios.get(
        `${url}?i=${imdbID}&plot=full&apikey=${apiKey}`
      );
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
  }, [imdbID]);

  return (
    <div className="movie__body">
      <div className="movie__container">
        <div className="movie__selected--top--row">
          <div className="movie__selected--top">
            <Link to={`/movies/${userInput}`} className="movie__link">
              <FontAwesomeIcon icon="arrow-left" className="red arrow" />
            </Link>
            <Link to={`/movies/${userInput}`} className="movie__link">
              <h2 className="movie__selected--title--top red">Movies</h2>
            </Link>
          </div>
        </div>

        <div className="movie__selected">
          {loading ? (
            <>
              <div className="skeleton movie__selected--figure movie__selected--figure--skeleton"></div>
              <div className="skeleton movie__selected--description movie__selected--description--skeleton"></div>
            </>
          ) : (
            movieSelected && (
              <>
                <figure className="movie__selected--figure">
                  <img
                    src={movieSelected.Poster}
                    alt="Movie Image"
                    className="movie__selected--img"
                  />
                </figure>
                <div className="movie__selected--description">
                  <h2 className="movie__selected--title">
                    {movieSelected.Title}
                  </h2>

                  <div className="movie__selected--top__container">
                    <div className="movie__selected--lists__container">
                      <ul className="movie__selected--info--lists">
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
                      <ul className="movie__lists genre__lists">
                        {movieSelected.Genre.split(", ").map((genre, index) => (
                          <li key={index} className="movie__list genre__list">
                            {genre}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="movie__selected--row">
                    {movieSelected.Plot}
                  </div>

                  {movieSelected.Director && (
                    <div className="movie__selected--row">
                      <ul className="movie__lists">
                        Directors
                        {movieSelected.Director.split(", ").map(
                          (director, index) => (
                            <li key={index} className="movie__info__list blue">
                              {director}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {movieSelected.Writer && (
                    <div className="movie__selected--row">
                      <ul className="movie__lists">
                        Writers
                        {movieSelected.Writer.split(", ").map(
                          (writer, index) => (
                            <li key={index} className="movie__info__list blue">
                              {writer}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {movieSelected.Actors && (
                    <div className="movie__selected--row movie__selected--actor">
                      <ul className="movie__lists">
                        Actors
                        {movieSelected.Actors.split(", ").map(
                          (actor, index) => (
                            <li key={index} className="movie__info__list blue">
                              {actor}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )
          )}
        </div>
        {/* {loading ? (
          new Array(8).fill(0).map((_, index) => (
            <div className="result__container--skeleton" key={index}>
              <figure className="skeleton movie__img__container--skeleton"></figure>
              <div>
                <h2 className="skeleton movie__title--skeleton"></h2>
                <h2 className="skeleton movie__year--skeleton"></h2>
              </div>
            </div>
          ))
        ) : (
          <Recommend
            movieSelected={movieSelected}
            movieList={movieList}
            userInput={userInput}
          /> */}
        )}
      </div>
    </div>
  );
};
export default MovieInfo;
