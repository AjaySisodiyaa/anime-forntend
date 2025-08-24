import React, { useEffect } from "react";
import { useSeriesContext } from "../context/seriesContext";
import SeriesCard from "../components/SeriesCard/SeriesCard";
import "./CSS/Home.css";

const Home = () => {
  const { series, getAllSeries } = useSeriesContext();

  useEffect(() => {
    getAllSeries(); // ✅ actually call it
  }, []); // ✅ empty deps so it runs once

  console.log("series", series);

  return (
    <div className="Home">
      <h1>Series List</h1>
      <div className="series-list">
        <SeriesCard />
      </div>
    </div>
  );
};

export default Home;
