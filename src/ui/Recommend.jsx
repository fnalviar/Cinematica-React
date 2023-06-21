import React from "react";
import Movie from "../pages/Movie";

const Recommend = ({ movieSelected, movieList }) => {
  const movieListArrayConvert = Object.values(movieList);
  const movieListArray = movieListArrayConvert[0];

  return (
    <div className="recommend__container">
      <div className="recommend__title__container">
        <h2 className="recommend__title">Recommend</h2>
      </div>
      <div className="recommend__movies__container">
        {movieListArray &&
          movieListArray
            .filter((movie) => movie.imdbID !== movieSelected.imdbID && movie.Type === movieSelected.Type)
            .slice(0, 8)
            .map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default Recommend;
