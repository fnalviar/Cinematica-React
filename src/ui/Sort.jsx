import React, { useState } from "react";

const Sort = ({ movieList: initialMovieList }) => {
  const [movies, setMovies] = useState([initialMovieList]);

  function filterMovies(filter) {
    if (filter === "ASCENDING_TITLE") {
      console.log("ASCENDING TITLE");
      setMovies(movies.slice().sort((a, b) => a.Title.localeCompare(b.Title)));
    } else if (filter === "DESCENDING_TITLE") {
      console.log("DESCENDING TITLE");
      setMovies(movies.slice().sort((a, b) => b.Title.localeCompare(a.Title)));
    } else if (filter === "OLDEST_TO_NEWEST") {
      console.log("OLDEST TO NEWEST");
      setMovies(
        movies.slice().sort((a, b) => parseInt(a.Year) - parseInt(b.Year))
      );
    } else if (filter === "NEWEST_TO_OLDEST") {
      console.log("NEWEST TO OLDEST");
      setMovies(
        movies.slice().sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
      );
    }
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
