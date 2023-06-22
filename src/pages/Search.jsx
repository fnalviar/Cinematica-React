import React from "react";
import UndrawSearch from "../assets/undraw_search.svg";
import SearchMovie from "../ui/SearchMovie";

const Search = () => {
  return (
    <>
      <SearchMovie />

      <figure className="search__figure__container">
        <img src={UndrawSearch} alt="Undraw Search Image" className="search__image" />
      </figure>
      
    </>
  );
};

export default Search;
