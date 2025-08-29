import SeriesCard from "../components/SeriesCard/SeriesCard";
import "./CSS/Home.css";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import { useSeriesContext } from "../context/seriesContext";
import { useEffect } from "react";
import Loading from "../components/Loaidng/Loading";
import VideoFeed from "../components/VideoFeed/VideoFeed";

const Home = () => {
  const {
    query,
    setQuery,
    handleSearch,
    getPopularMovies,
    getPopularSeries,
    popularMovies,
    popularSeries,
    getAllMovies,
    getAllSeries,
    movies,
    series,
  } = useSeriesContext();

  useEffect(() => {
    getPopularMovies();
    getPopularSeries();
    getAllMovies();
    getAllSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Home">
      <div className="series-list">
        <form className="mobile-search desk-hide" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search...."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mobile-search-input"
            onClick={() =>
              document.querySelector(".mobiel-links").classList.toggle("hide")
            }
          />
          <button type="submit" className="mobile-search-button">
            Search
          </button>
        </form>
        <h1>Resent Movies</h1>
        <SeriesCard movies={movies?.slice(0, 10)} Stype="movie" />
        <div className="loadmore-container">
          <button
            onClick={() => (window.location.href = "/movies")}
            className="loadmore"
          >
            All Movies
          </button>
        </div>
        <AdsterraBanner />
        <h1>Resent Series</h1>
        <SeriesCard series={series?.slice(0, 10)} Stype="series" />
        <div className="loadmore-container">
          <button
            onClick={() => (window.location.href = "/movies")}
            className="loadmore"
          >
            All Movies
          </button>
        </div>

        <h1>Popular Movies</h1>
        <SeriesCard movies={popularMovies?.slice(0, 10)} Stype="movie" />

        <h1>Popular Series</h1>
        <SeriesCard series={popularSeries?.slice(0, 10)} Stype="series" />
      </div>
    </div>
  );
};

export default Home;
