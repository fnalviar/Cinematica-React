import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PageResult = ({ fetchMovies, totalPages, userInput, currentPage, pageChangeHandler }) => {

  function nextPageHandler() {
    const nextPage = currentPage + 1;
    pageChangeHandler(nextPage);
    fetchMovies(userInput, nextPage);
  }
  
  function previousPageHandler() {
    const previousPage = currentPage - 1;
    pageChangeHandler(previousPage);
    fetchMovies(userInput, previousPage);
  }

  function userInputPageHandler(event) {
    const userInputPage = parseInt(event.target.value);
    pageChangeHandler(userInputPage);
    fetchMovies(userInput, userInputPage);
  }

  

  console.log("currentPage at PageResult", currentPage);

  return (
    <div className="page__button__container">
      {currentPage !== 1 && (
        <button className="btn button--page" onClick={previousPageHandler}>
          <FontAwesomeIcon icon={"arrow-left"} />
        </button>
      )}
      <div className="page--number--results__container">
        <h2 className="page--number__container">
          <input
            type="number"
            className="page--number"
            value={currentPage}
            // onChange={(event) => setCurrentPage(event.target.value)}
            onChange={userInputPageHandler}
            onKeyDown={(event) => {
              if (event.key === "Enter" && event.target.value !== "0") {
                userInputPageHandler(event);
              }
            }}
          />
          / {totalPages}
        </h2>
      </div>

      {currentPage !== totalPages && (
        <button className="btn button--page" onClick={nextPageHandler}>
          <FontAwesomeIcon icon={"arrow-right"} />
        </button>
      )}
    </div>
  );
};

export default PageResult;
