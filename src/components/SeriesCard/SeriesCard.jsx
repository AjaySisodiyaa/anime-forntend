import { useLocation } from "react-router-dom";
import { useSeriesContext } from "../../context/seriesContext";
import "./SeriesCard.css";
import { useEffect } from "react";

const SeriesCard = ({ Stype }) => {
  const { movies, series, getAllSeries, getAllMovies, results } =
    useSeriesContext();
  const location = useLocation();
  let counter = 5;

  useEffect(() => {
    if (Stype === "movie") {
      getAllMovies();
    } else {
      getAllSeries();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchMovies =
    location.pathname === "/search" ? results.movies : movies;
  const searchSeries =
    location.pathname === "/search" ? results.series : series;

  return (
    <div>
      {series.length === 0 ? (
        <p>Loading... Please Wait</p>
      ) : (
        <ul className="series-card-list">
          {Stype === "movie"
            ? (searchMovies || movies).map((s, index) => (
                <li
                  onClick={() => window.location.replace(`/series/${s.slug}`)}
                  key={index}
                  className="series-card-item"
                >
                  <img src={s.image} loading="lazy" alt={s.title} width="150" />
                  {counter-- > 0 && (
                    <h4 style={{ padding: "0 10px" }} className="glow-animate">
                      New
                    </h4>
                  )}
                  <h3>{s.title}</h3>
                </li>
              ))
            : (searchSeries || series).map((s, index) => (
                <li
                  onClick={() => window.location.replace(`/movie/${s.slug}`)}
                  key={index}
                  className="series-card-item"
                >
                  <img src={s.image} loading="lazy" alt={s.title} width="150" />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>{s?.episode?.length}</p>
                    {counter-- > 0 && (
                      <h4
                        style={{ padding: "0 10px" }}
                        className="glow-animate"
                      >
                        New
                      </h4>
                    )}
                  </div>
                  <h3>{s.title}</h3>
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default SeriesCard;
