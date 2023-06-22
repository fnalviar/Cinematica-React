import React from "react";
import Movie from "../pages/Movie";

const Recommend = ({ movieSelected, movieList: initialMovieList }) => {
  const movieList = initialMovieList.movieList;

  return (
    <div className="recommend__container">
      <div className="recommend__title__container">
        <h2 className="recommend__title">Recommendations </h2>
      </div>
      <div className="recommend__movies__container">
        {movieList &&
          movieList
            .filter(
              (movie) =>
                movie.imdbID !== movieSelected.imdbID ||
                movie.Type == movieSelected.Type ||
                movie.Year >= movieSelected.Year - 5 // only shows movies 5 years before the movie selected released year
            )
            .slice(0, 3)
            .map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default Recommend;
