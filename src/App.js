import Search from "./pages/Search/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import React from 'react';
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-movies" element={<Search />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
