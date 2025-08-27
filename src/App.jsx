import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Player from "./pages/Player";
import { useSeriesContext } from "./context/seriesContext";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./helpers/ScrollToTop";
import Series from "./pages/Series";
import Movie from "./pages/Movie";
import { HeadProvider } from "react-head";
import Search from "./pages/Search";
import Loading from "./components/Loaidng/Loading";

function App() {
  const { loading } = useSeriesContext();
  return (
    <div className="App">
      <HeadProvider>
        <ScrollToTop />
        <Navbar />
        {loading && <Loading />}

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
    </div>
  );
}

export default App;
