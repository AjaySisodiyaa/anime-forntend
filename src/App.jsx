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

function App() {
  return (
    <div className="App">
      <SeriesContextProvider>
        <HeadProvider>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:type/:Id" element={<Player />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movie />} />
          </Routes>
        </HeadProvider>
      </SeriesContextProvider>
    </div>
  );
}

export default App;
