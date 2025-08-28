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
  const handleprev = () => {
    setPage(page - 1);
    getAllSeries(page - 1);
  };
  const handlenext = () => {
    setPage(page + 1);
    getAllSeries(page + 1);
  };
  return loading ? (
    <Loading />
  ) : (
    <div className="series">
      <div className="Home">
        <div className="loadmore-container">
          <h1>Series List</h1>
          <button
            onClick={() => {
              setPage(1);
              getAllSeries();
            }}
            className="loadmore"
          >
            1
          </button>
          {page > 1 && (
            <button onClick={handleprev} className="loadmore">
              Prev
            </button>
          )}
          {series.length > 0 && (
            <button onClick={handlenext} className="loadmore">
              Next
            </button>
          )}
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
