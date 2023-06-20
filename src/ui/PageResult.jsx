import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PageResult = ({ fetchMovies, totalPages, userInput }) => {
  const [currentPage, setCurrentPage] = useState(1);

  function nextPageHandler() {
    const nextPage = currentPage + 1;
    fetchMovies(userInput, nextPage);
    setCurrentPage(nextPage);
  }

  function previousPageHandler() {
    const previousPage = currentPage - 1;
    fetchMovies(userInput, previousPage);
    setCurrentPage(previousPage);
  }

  return (
    <div className="page__button__container">
      <button className="btn left__button--page" onClick={previousPageHandler}>
        <FontAwesomeIcon icon={"arrow-left"} />
      </button>
      <span className="page--number--result">
        {currentPage}/{totalPages}
      </span>
      <button className="btn right__button--page" onClick={nextPageHandler}>
        <FontAwesomeIcon icon={"arrow-right"} />
      </button>
    </div>
  );
};

export default PageResult;
