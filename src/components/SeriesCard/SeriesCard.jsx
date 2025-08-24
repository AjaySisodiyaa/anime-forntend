import React from "react";
import { Link } from "react-router-dom";
import { useSeriesContext } from "../../context/seriesContext";
import "./SeriesCard.css";

const SeriesCard = () => {
  const { series } = useSeriesContext();

  return (
    <div>
      {series.length === 0 ? (
        <p>No series found</p>
      ) : (
        <ul className="series-card-list">
          {series.map((s, index) => (
            <Link to={`/${s._id}`}>
              <li key={index} className="series-card-item">
                <img src={s.image} alt={s.title} width="150" />
                <h3>{s.title}</h3>
                {/* <p>Episodes: {s.episode.join(", ")}</p> */}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeriesCard;
