import SeriesCard from "../components/SeriesCard/SeriesCard";
import "./CSS/Home.css";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";

const Home = () => {
  return (
    <div className="Home">
      <AdsterraBanner />
      <div className="series-list">
        <h1>Popular Movies</h1>
        <SeriesCard Stype="movie" />
        <h1>Popular Series</h1>
        <SeriesCard Stype="series" />
      </div>
    </div>
  );
};

export default Home;
