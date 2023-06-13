import React from "react";

const Landing = () => {



  return (
    <div id="main">
      <div className="header__container">
        <div className="header__description">
          <h1 className="header__title">
            Canada's most trusted video streaming platform
          </h1>
          <h2 className="header__subtitle">
            FIND WHAT TO BINCH WATCH NEXT WITH 
            <span className="purple"> CINEMATICA!</span>
          </h2>
        </div>
        <div className="search__bar__container">
          <form className="movie__form__container">
            <input
              id="user__input"
              type="text"
              className="search__field"
              placeholder="Search by movie or series title"
            />
            <button className="btn btn--search">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
