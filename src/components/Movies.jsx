import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Movie from "../pages/Movie";
import SearchMovie from "../ui/SearchMovie";

const Movies = () => {
  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;

  // const fullApi = `https://www.omdbapi.com/?s=Ant&apikey=11aed1bd`;

  let navigate = useNavigate();

  const { userInput } = useParams();

  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  async function fetchMovies(userInput) {
    if (userInput !== "") {
      setLoading(true);

      try {
        const { data } = await axios.get(
          `${url}?s=${userInput}&apikey=${apiKey}`
        );
        console.log("userInput at Movies.jsx, ", userInput);
        setMovieList(data.Search);
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
      fetchMovies(userInput);
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

  function titleCaseUserInput(userInput) {
    const titleCase = userInput
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    return titleCase;
  }

  return (
    <>
      <SearchMovie />

      <div className="sort__container">
        <h2 id="results__number" className="results__title">
          Search Results for "{titleCaseUserInput(userInput)}"
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

      <div id="movieResults" className="row">
        {loading
          ? new Array(10).fill(0).map((_, index) => (
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
    </>
  );
};

export default Movies;
