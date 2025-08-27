import { useEffect, useState } from "react";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import SeriesCard from "../components/SeriesCard/SeriesCard";
import { useSeriesContext } from "../context/seriesContext";
import Loading from "../components/Loaidng/Loading";

const Series = () => {
  const { series, getAllSeries, loading } = useSeriesContext();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlepage = () => {
    setPage(page + 1);
    getAllSeries(page + 1);
  };
  return loading ? (
    <Loading />
  ) : (
    <div className="series">
      <div className="Home">
        <div className="loadmore-container">
          <button onClick={handlepage} className="loadmore">
            Load More
          </button>
          <h1>Series List</h1>
        </div>
        <div className="series-list">
          <SeriesCard Stype="series" series={series} />
          <AdsterraBanner />
        </div>
      </div>
    </div>
  );
};

export default Series;
