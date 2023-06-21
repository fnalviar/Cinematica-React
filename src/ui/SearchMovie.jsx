import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  async function searchHandler(event) {
    event.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate(`/movies/${userInput}`);
    } finally {
      setLoading(false);
    }
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
            onKeyDown={(event) => {
              event.key === "Enter" && searchHandler(event);
            }}
            value={userInput}
          />

          {loading ? (
            <button className="btn btn--search">
              <FontAwesomeIcon icon={"spinner"} />
            </button>
          ) : (
            <button className="btn btn--search" onClick={searchHandler}>
              Search
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchMovie;
