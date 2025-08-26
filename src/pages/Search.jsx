import React from "react";

import SeriesCard from "../components/SeriesCard/SeriesCard";

import "./CSS/Home.css";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";

const Search = () => {
  return (
    <div className="Home">
      <SeriesCard Stype="movie" />
      <SeriesCard Stype="series" />
    </div>
  );
};

export default Search;
