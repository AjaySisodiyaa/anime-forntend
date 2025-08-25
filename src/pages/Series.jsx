import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import SeriesCard from "../components/SeriesCard/SeriesCard";

const Series = () => {
  return (
    <div className="series">
      <div className="Home">
        <AdsterraBanner />
        <h1>Series List</h1>
        <div className="series-list">
          <SeriesCard />
        </div>
      </div>
    </div>
  );
};

export default Series;
