import React, { useState } from "react";

const Sort = ({ movieListProp }) => {
  const [movieList, setMovieList] = useState([...movieListProp]);

  function filterMovies(filter) {
    const sortedMovies = [...movieList];

    if (filter === "ASCENDING_TITLE") {
      sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (filter === "DESCENDING_TITLE") {
      sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (filter === "OLDEST_TO_NEWEST") {
      sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (filter === "NEWEST_TO_OLDEST") {
      sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }
    setMovieList(sortedMovies);
    updateMovieList(sortedMovies);
  }

  return (
    <>
      <div className="sort__container">
        <h2 id="results__number" className="results__title">
          Results
        </h2>
        <select
          className="sort__elements"
          id="filter"
          defaultValue="DEFAULT"
          onChange={(event) => filterMovies(event.target.value)}
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
    </>
  );
};

export default Sort;
