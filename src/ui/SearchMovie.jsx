import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
  const [userInput, setUserInput] = useState("");

  let navigate = useNavigate();

  async function searchHandler(event) {
    event.preventDefault();
    console.log("userInput at SearchMovie.jsx, ", userInput);

    navigate(`/movies/${userInput}`);
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

          <button className="btn btn--search" onClick={searchHandler}>
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchMovie;
