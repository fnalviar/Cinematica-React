import axios from "axios";
import React, { useEffect, useState } from "react";

const Movies = () => {
  const [post, setPost] = useState([]);
  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;
  let movieDataList = [];
  const keyword = "Ant";

  async function fetchMovies() {
    const { data } = await axios.get(`${url}?s=${keyword}&apikey=${apiKey}`);
    console.log("data", data);
    movieDataList = data.Search;
    console.log("movieDataList", movieDataList);
    const imdbID = "tt0478970"; // Ant-Man
    const response = await axios.get(`${url}?i=${imdbID}&apikey=${apiKey}`);
    console.log("imdbID data", response);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  function movieSearch() {
    
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
          />
          <button className="btn btn--search" onClick={movieSearch}>
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
        <div id="movieResults" className="row">
          <div className="result__container">
            <figure className="movie__img__container">
              <img src="" alt="Movie Image" className="movie__img" />
            </figure>
            <div id="movie__description" className="movie__description">
              <h2 className="movie__title">
                <i> Movie Title</i>
              </h2>
              <h2 className="movie__year">Movie Year</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
