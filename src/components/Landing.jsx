import React from "react";
import SearchMovie from "../ui/SearchMovie";
import landingMovieImage from "../assets/landing_movies.png";

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
        <SearchMovie />
        <figure className="landing__image__container">
          <img src={landingMovieImage} alt="Landing Movie Image" />
        </figure>
      </div>
    </div>
  );
};

export default Landing;
