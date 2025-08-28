import { useEffect, useState } from "react";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";

import SeriesCard from "../components/SeriesCard/SeriesCard";
import { useSeriesContext } from "../context/seriesContext";

import "./CSS/Movie.css";

const Movie = () => {
  const { movies, getAllMovies } = useSeriesContext();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getAllMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { setType } = useSeriesContext();
  useEffect(() => {
    setType("movie");
  }, [setType]);

  const handleprev = () => {
    setPage(page - 1);
    getAllMovies(page - 1);
  };
  const handlenext = () => {
    setPage(page + 1);
    getAllMovies(page + 1);
  };
  return (
    <div className="movie">
      <div className="movie-container">
        <div className="loadmore-container">
          <h1>Movie List</h1>
          <button
            onClick={() => {
              setPage(1);
              getAllMovies();
            }}
            className="loadmore"
          >
            1
          </button>
          {page > 1 && (
            <button onClick={handleprev} className="loadmore">
              Prev
            </button>
          )}
          {movies.length > 0 && (
            <button onClick={handlenext} className="loadmore">
              Next
            </button>
          )}
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
