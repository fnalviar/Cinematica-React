import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchMovie from "../ui/SearchMovie";
import { useNavigate, useParams } from "react-router-dom";
import Movie from "../pages/Movie";

const Movies = () => {
  const apiKey = `11aed1bd`;
  const url = `https://www.omdbapi.com/`;

  let navigate = useNavigate();

  const { userInput } = useParams();
  console.log("userInput at Movies.jsx, ", userInput);

  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  async function fetchMovies(userInput) {
    if (userInput !== "") {
      console.log("userInput at Movies.jsx", userInput);
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
    }
  }

  useEffect(() => {
    if (userInput !== "") {
      fetchMovies(userInput);
    }
  }, []);

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
      <SearchMovie fetchMovies={fetchMovies} />

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
              <Movie key={movie.imdbID} movie={movie} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
