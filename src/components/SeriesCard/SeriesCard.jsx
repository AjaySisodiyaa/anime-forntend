import { useSeriesContext } from "../../context/seriesContext";
import "./SeriesCard.css";
import { useEffect } from "react";

const SeriesCard = () => {
  const { series, getAllSeries } = useSeriesContext();

  useEffect(() => {
    getAllSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {series.length === 0 ? (
        <p>Loading... Please Wait</p>
      ) : (
        <ul className="series-card-list">
          {series.map((s, index) => (
            // <Link to={`series/${s._id}`}>
            <li
              onClick={() => window.location.replace(`/series/${s._id}`)}
              key={index}
              className="series-card-item"
            >
              <img src={s.image} alt={s.title} width="150" />
              <h3>{s.title}</h3>
              <p>{s?.episode?.length}</p>
            </li>
            // </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeriesCard;
