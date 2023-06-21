import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PageResult = ({ fetchMovies, totalPages, userInput }) => {
  const [currentPage, setCurrentPage] = useState(1);

  function nextPageHandler() {
    setCurrentPage((prevPage) => prevPage + 1);
    fetchMovies(userInput, currentPage);
  }

  function previousPageHandler() {
    setCurrentPage((prevPage) => prevPage - 1);
    fetchMovies(userInput, currentPage);
  }

  function userInputPageHandler(event) {
    const userInputPage = parseInt(event.target.value);
    setCurrentPage(userInputPage);
    fetchMovies(userInput, currentPage);
  }

  return (
    <div className="page__button__container">
      {currentPage != 1 && (
        <button
          className="btn left__button--page"
          onClick={previousPageHandler}
        >
          <FontAwesomeIcon icon={"arrow-left"} />
        </button>
      )}
      <div className="page--number--results__container">
        <h2>
          <input
            type="number"
            className="page--number"
            value={currentPage}
            onChange={(event) => setCurrentPage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key == "Enter" && event.target.value !== "0") {
                userInputPageHandler(event);
              }
            }}
          />
          /{totalPages}
        </h2>
      </div>

      {currentPage != totalPages && (
        <button className="btn right__button--page" onClick={nextPageHandler}>
          <FontAwesomeIcon icon={"arrow-right"} />
        </button>
      )}
    </div>
  );
};

export default PageResult;
