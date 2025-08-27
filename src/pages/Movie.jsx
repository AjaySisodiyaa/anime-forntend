import { useEffect } from "react";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";

import SeriesCard from "../components/SeriesCard/SeriesCard";
import { useSeriesContext } from "../context/seriesContext";

import "./CSS/Movie.css";
import Loading from "../components/Loaidng/Loading";

const Movie = () => {
  const { movies, getAllMovies, loading } = useSeriesContext();
  useEffect(() => {
    getAllMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { setType } = useSeriesContext();
  useEffect(() => {
    setType("movie");
  }, [setType]);
  return loading ? (
    <Loading />
  ) : (
    <div className="movie">
      <div className="movie-container">
        <h1>Movie List</h1>
        <div className="movie-list">
          <SeriesCard Stype="movie" movies={movies} />
          <AdsterraBanner />
        </div>
      </div>
    </div>
  );
};

export default Movie;
