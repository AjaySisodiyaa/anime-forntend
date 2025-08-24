import React, { useEffect } from "react";
import { useSeriesContext } from "../context/seriesContext";
import SeriesCard from "../components/SeriesCard/SeriesCard";
import "./CSS/Home.css";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import MovieCard from "../components/MovieCard/MovieCard";

const Home = () => {
  // const { getAllSeries } = useSeriesContext();

  // useEffect(() => {
  //   getAllSeries(); // ✅ actually call it
  // }, []); //
  return (
    <div className="Home">
      <AdsterraBanner />
      <div className="series-list">
        <h1>Popular Movies</h1>
        <MovieCard />
        <h1>Popular Series</h1>
        <SeriesCard />
      </div>
    </div>
  );
};

export default Home;
