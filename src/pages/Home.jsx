import SeriesCard from "../components/SeriesCard/SeriesCard";
import "./CSS/Home.css";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import { useSeriesContext } from "../context/seriesContext";
import { useEffect, useState } from "react";
import Loading from "../components/Loaidng/Loading";
import VideoFeed from "../components/VideoFeed/VideoFeed";

const Home = () => {
  const [isPlay, setIsPlay] = useState(false);
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
        <div>
          {isPlay ? (
            <iframe
              title="hero-video"
              onClick={() => setIsPlay(false)}
              className="hero-video"
              src="https://fuhho374key.com/play/tt33996113"
              frameborder="0"
            ></iframe>
          ) : (
            <div
              onClick={() => setIsPlay(true)}
              className="hero-poster-container"
            >
              <img
                className="hero-poster"
                src="https://cdn.123telugu.com/content/wp-content/uploads/2025/08/Param-Sundhari-Feat.webp"
                alt=""
              />
              <div className="hero-overlay">
                <p>Play</p>
              </div>
            </div>
          )}
        </div>

        {/* <div className="video-player">
          <div style={{ backgroundColor: "black", overflow: "hidden" }}>
            <iframe
              src={movies[0]?.movie}
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen=""
              title="episode"
              style={{ overflow: "hidden" }}
              scrolling="no"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>

          <div className="poster-container">
            <img className="poster" src={movies[0]?.image} alt="" />
          </div>
        </div> */}

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
