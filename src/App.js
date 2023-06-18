import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" exact element={<MovieInfo />} />
          <Route path="/movies/:userInput" exact element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
