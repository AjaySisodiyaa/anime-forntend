import { useSeriesContext } from "../../context/seriesContext";
import "./MovieCard.css";
import { useEffect } from "react";

const MovieCard = () => {
  const { movies, getAllMovies } = useSeriesContext();

  useEffect(() => {
    getAllMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {movies.length === 0 ? (
        <p>Loading... Please Wait</p>
      ) : (
        <ul className="movie-card-list">
          {movies.map((s, index) => (
            // <Link to={`/movie/${s._id}`}>
            <li
              onClick={() => window.location.replace(`/movie/${s._id}`)}
              key={index}
              className="movie-card-item"
            >
              <img src={s.image} alt={s.title} />
              <h3>{s.title}</h3>
              <h4 className="glow-animate">New</h4>
            </li>
            // </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCard;
