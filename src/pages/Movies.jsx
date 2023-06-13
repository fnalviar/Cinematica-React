import React from "react";

const Movies = () => {
  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;

  

  return (
    <div id="search__result">
      <div className="sort__container">
        <h2 id="results__number" className="results__title">
          Results
        </h2>
        <select className="sort__elements" id="filter" onchange="sortResult(event)">
          <option value="" disabled selected>
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
            <img
              src=""
              alt="Movie Image"
              className="movie__img"
            />
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
  );
};

export default Movies;
