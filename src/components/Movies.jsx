import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../pages/Movie";
import PageResult from "../ui/PageResult";
import SearchMovie from "../ui/SearchMovie";

const Movies = () => {
  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;

  const itemsPerPage = 10; // OMDBapi only display 10 movies per page
  const { userInput } = useParams();

  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  async function fetchMovies(userInput, page) {
    if (userInput !== "") {
      setLoading(true);

      try {
        const { data } = await axios.get(
          `${url}?s=${userInput}&page=${page}&apikey=${apiKey}`
        );
        setMovieList(data.Search);
        setTotalResults(parseInt(data.totalResults));

        console.log("movieList at Movies.jsx, ", movieList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    if (userInput !== null) {
      setCurrentPage(1);
      setMovieList([]);
      fetchMovies(userInput, 1);
    }
  }, [userInput]);

  function filterMovies(filter) {
    const sortedMovies = [...movieList];

    if (filter === "ASCENDING_TITLE") {
      sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (filter === "DESCENDING_TITLE") {
      sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (filter === "OLDEST_TO_NEWEST") {
      sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (filter === "NEWEST_TO_OLDEST") {
      sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }
    setMovieList(sortedMovies);
  }

  const totalPages = Math.ceil(totalResults / itemsPerPage);

  return (
    <>
      <SearchMovie />

      <div className="movie--results--header__container">
        <div className="movie--results--header--row">
          <h2 className="results__title">
            Search Results for{" "}
            <span className="blue user--input--results__title">
              {userInput}
            </span>
          </h2>

          <select
            className="sort__elements"
            id="filter"
            defaultValue="DEFAULT"
            onChange={(event) => filterMovies(event.target.value)}
          >
            <option value="" disabled>
              Sort
            </option>
            <option value="ASCENDING_TITLE">Title, A-Z</option>
            <option value="DESCENDING_TITLE">Title, Z-A</option>
            <option value="OLDEST_TO_NEWEST">Year, Oldest to Newest</option>
            <option value="NEWEST_TO_OLDEST">Year, Newest to Oldest</option>
          </select>
        </div>
      </div>

      <div className="movie__results__container">
        <div className="row">
          {loading
            ? Array.from({ length: itemsPerPage }).map((_, index) => (
                <div className="result__container--skeleton" key={index}>
                  <figure className="skeleton movie__img__container--skeleton"></figure>
                  <div>
                    <h2 className="skeleton movie__title--skeleton"></h2>
                    <h2 className="skeleton movie__year--skeleton"></h2>
                  </div>
                </div>
              ))
            : movieList &&
              movieList.map((movie) => (
                <Movie
                  key={movie.imdbID}
                  movie={movie}
                  userInput={userInput}
                  movieList={movieList}
                />
              ))}
        </div>
      </div>
      <div className="bottom__page--result">
        <PageResult
          fetchMovies={fetchMovies}
          totalPages={totalPages}
          userInput={userInput}
        />
      </div>
    </>
  );
};

export default Movies;
