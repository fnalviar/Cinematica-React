import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieInfo />} />
          <Route path="/movies/:userInput" element={<Movies />} />
          {/* <Route path="/movies" element={<Movies />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
