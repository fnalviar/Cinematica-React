import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import Footer from "./components/Footer";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:userInput/:imdbID" exact element={<MovieInfo />} />
          <Route path="/movies/:userInput" exact element={<Movies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
