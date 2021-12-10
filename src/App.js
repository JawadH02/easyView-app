import Search from "./pages/Search/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search-movies" exact element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
