import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import MovieCard from "../components/MovieCard/MovieCard";

import "./CSS/Movie.css";

const Movie = () => {
  return (
    <div className="movie">
      <div className="movie-container">
        <AdsterraBanner />
        <h1>Movie List</h1>
        <div className="movie-list">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Movie;
