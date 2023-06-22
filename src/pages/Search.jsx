import React from "react";
import UndrawSearch from "../assets/undraw_search.svg";
import FilmImage from "../assets/film-image.jpg";
import SearchMovie from "../ui/SearchMovie";

const Search = () => {
  return (
    <>
      <div className="search__description">
        <h2 className="search__title">
          Search <span className="blue">Cinematica!</span>
        </h2>
      </div>

      <SearchMovie />

      <figure className="search__figure__container">
        <img
          src={UndrawSearch}
          alt="Undraw Search Image"
          className="search__image"
        />
      </figure>
    </>
  );
};

export default Search;
