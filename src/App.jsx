import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Player from "./pages/Player";
import { SeriesContextProvider } from "./context/seriesContext";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./helpers/ScrollToTop";
import Series from "./pages/Series";
import Movie from "./pages/Movie";
import { HeadProvider } from "react-head";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <SeriesContextProvider>
        <HeadProvider>
          <ScrollToTop />
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:type/:slug" element={<Player />} />
              <Route path="/series" element={<Series />} />
              <Route path="/movies" element={<Movie />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </HeadProvider>
      </SeriesContextProvider>
    </div>
  );
}

export default App;
