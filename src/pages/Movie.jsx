import { useEffect, useState } from "react";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";

import SeriesCard from "../components/SeriesCard/SeriesCard";
import { useSeriesContext } from "../context/seriesContext";

import "./CSS/Movie.css";
import Loading from "../components/Loaidng/Loading";

const Movie = () => {
  const { movies, getAllMovies, loading } = useSeriesContext();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getAllMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { setType } = useSeriesContext();
  useEffect(() => {
    setType("movie");
  }, [setType]);

  const handlepage = () => {
    setPage(page + 1);
    getAllMovies(page + 1);
  };
  return (
    <div className="movie">
      <div className="movie-container">
        <div className="loadmore-container">
          <button onClick={handlepage} className="loadmore">
            Load More
          </button>
          <h1>Movie List</h1>
        </div>
        <div className="movie-list">
          <SeriesCard Stype="movie" movies={movies} />

          <AdsterraBanner />
        </div>
      </div>
    </div>
  );
};

export default Movie;
