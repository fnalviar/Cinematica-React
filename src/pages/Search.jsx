import React from "react";
import UndrawSearch from "../assets/undraw_search.svg";
import PopCorn from "../assets/popcorn.jpg";
import SearchMovie from "../components/ui/SearchMovie";

const Search = () => {
  return (
    <div className="search__container">
      <img src={PopCorn} alt="Popcorn" className="popcorn popcorn--0" />
      <img src={PopCorn} alt="Popcorn" className="popcorn popcorn--1" />
      <img src={PopCorn} alt="Popcorn" className="popcorn popcorn--2" />
      <img src={PopCorn} alt="Popcorn" className="popcorn popcorn--3" />
      <img src={PopCorn} alt="Popcorn" className="popcorn popcorn--4" />
      <img src={PopCorn} alt="Popcorn" className="popcorn popcorn--5" />
      <img src={PopCorn} alt="Popcorn" className="popcorn popcorn--6" />
      <img src={PopCorn} alt="Popcorn" className="popcorn popcorn--7" />
      <img src={PopCorn} alt="Popcorn" className="popcorn popcorn--8" />

      <div className="search--content__container">
        <div className="search__description">
          <h2 className="search__title">
            Search <span className="blue company-name--search">Cinematica!</span>
          </h2>
        </div>

        <SearchMovie />
      </div>

      <figure className="search__figure__container">
        <img
          src={UndrawSearch}
          alt="Undraw Search Image"
          className="search__image"
        />
      </figure>
    </div>
  );
};

export default Search;
