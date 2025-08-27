import { useEffect } from "react";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import SeriesCard from "../components/SeriesCard/SeriesCard";
import { useSeriesContext } from "../context/seriesContext";
import Loading from "../components/Loaidng/Loading";

const Series = () => {
  const { series, getAllSeries, loading } = useSeriesContext();
  useEffect(() => {
    getAllSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div className="series">
      <div className="Home">
        <h1>Series List</h1>
        <div className="series-list">
          <SeriesCard Stype="series" series={series} />
          <AdsterraBanner />
        </div>
      </div>
    </div>
  );
};

export default Series;
