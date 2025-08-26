import { useEffect } from "react";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";

import SeriesCard from "../components/SeriesCard/SeriesCard";
import { useSeriesContext } from "../context/seriesContext";

import "./CSS/Movie.css";

const Movie = () => {
  const { setType } = useSeriesContext();
  useEffect(() => {
    setType("movie");
  }, [setType]);
  return (
    <div className="movie">
      <div className="movie-container">
        <AdsterraBanner />
        <h1>Movie List</h1>
        <div className="movie-list">
          <SeriesCard Stype="movie" />
        </div>
      </div>
    </div>
  );
};

export default Movie;
