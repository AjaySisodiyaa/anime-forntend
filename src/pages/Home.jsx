import SeriesCard from "../components/SeriesCard/SeriesCard";
import "./CSS/Home.css";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import { useSeriesContext } from "../context/seriesContext";
import { useEffect } from "react";
import Loading from "../components/Loaidng/Loading";

const Home = () => {
  const {
    query,
    setQuery,
    handleSearch,
    getPopularMovies,
    getPopularSeries,
    popularMovies,
    popularSeries,
  } = useSeriesContext();

  useEffect(() => {
    getPopularMovies();
    getPopularSeries();
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

        <h1>Popular Movies</h1>
        <SeriesCard movies={popularMovies} Stype="movie" />
        <AdsterraBanner />
        <h1>Popular Series</h1>
        <SeriesCard series={popularSeries} Stype="series" />
      </div>
    </div>
  );
};

export default Home;
