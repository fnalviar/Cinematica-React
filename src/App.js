import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Nav />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
