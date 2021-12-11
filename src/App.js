import Search from "./pages/Search/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-movies" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
