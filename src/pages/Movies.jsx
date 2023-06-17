import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Movie from "../components/Movie";

const Movies = () => {
  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;

  const navigate = useNavigate();

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  async function fetchMovies(userInput) {
    if (userInput !== "") {
      console.log("userInput", userInput);
      setLoading(true);

      try {
        const { data } = await axios.get(
          `${url}?s=${userInput}&apikey=${apiKey}`
        );
        console.log("data", data);
        setMovieList(data.Search);
        console.log("movieList", movieList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
      navigate(`/movies/${userInput}`);
    }
  }

  useEffect(() => {
    fetchMovies(userInput);
  }, [userInput]);

  function searchHandler(event) {
    event.preventDefault();
    fetchMovies(userInput);
  }

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
            value={userInput}
          />
          <button className="btn btn--search" onClick={() => searchHandler()}>
            Search
          </button>
        </form>
      </div>
      <div id="search__result">
        <div className="sort__container">
          <h2 id="results__number" className="results__title">
            Results
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
          {movieList &&
            movieList.map((movie) => (
              <Movie movie={movie} key={movie.imdbID} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
