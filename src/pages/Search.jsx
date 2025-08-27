import React, { useEffect } from "react";

import SeriesCard from "../components/SeriesCard/SeriesCard";

import "./CSS/Home.css";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import { useSeriesContext } from "../context/seriesContext";

const Search = () => {
  const { getAllSeries, getAllMovies, results } = useSeriesContext();

  useEffect(() => {
    getAllMovies();
    getAllSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="Home">
      <SeriesCard Stype="movie" movies={results.movies} />
      <SeriesCard Stype="series" series={results.series} />
      <AdsterraBanner />
    </div>
  );
};

export default Search;
