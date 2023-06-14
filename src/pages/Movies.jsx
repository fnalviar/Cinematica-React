import axios from "axios";
import React, { useEffect, useState } from "react";

const Movies = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;

  async function fetchMovies() {
    console.log("userInput", userInput);
    setLoading(true);

    try {
      const { data } = await axios.get(
        `${url}?s=${userInput}&apikey=${apiKey}`
      );
      // console.log("data", data);
      // console.log("data.Search", data.Search);
      setMovieList(data.Search);
      console.log("movieList", movieList);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userInput !== "") {
      fetchMovies(userInput);
    }
  }, []);

  function searchHandler(event) {
    event.preventDefault();
    fetchMovies();
  }

  return (
    <>
      <div className="search__bar__container">
        <form className="movie__form__container">
          <input
            id="user__input"
            type="text"
            className="search__field"
            placeholder="Search by movie or series title"
            onChange={(event) => setUserInput(event.target.value)}
            value={userInput}
          />
          <button className="btn btn--search" onClick={searchHandler}>
            Search
          </button>
        </form>
      </div>
      <div id="search__result">
        <div className="sort__container">
          <h2 id="results__number" className="results__title">
            Results
          </h2>
          <select
            className="sort__elements"
            id="filter"
            //   onChange="sortResult(event)"
          >
            <option value="" disabled>
              Sort
            </option>
            <option value="ASCENDING_TITLE">Title, A-Z</option>
            <option value="DESCENDING_TITLE">Title, Z-A</option>
            <option value="OLDEST_TO_NEWEST">Year, Oldest to Newest</option>
            <option value="NEWEST_TO_OLDEST">Year, Newest to Oldest</option>
          </select>
        </div>
        {movieList.map((movie) => (
          <div id="movieResults" className="row" key={movie.imdbID}>
            <div className="result__container">
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
