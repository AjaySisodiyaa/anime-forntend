import "./SeriesCard.css";

const SeriesCard = ({ Stype, movies, series, results }) => {
  let counter = 5;

  return (
    <ul className="series-card-list">
      {Stype === "movie"
        ? movies.map((s, index) => (
            <li
              onClick={() =>
                window.location.replace(`/movie/${s.slug || s?.movieId?.slug}`)
              }
              key={index}
              className="series-card-item"
            >
              <img
                src={s.image || s?.movieId?.image}
                loading="lazy"
                alt={s.title || s?.movieId?.title}
                width="150"
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                {s.movieId?._id && (
                  <h4 style={{ padding: "0 10px" }} className="glow-animate">
                    New
                  </h4>
                )}
                <h5 style={{ color: "yellow" }}>
                  {s?.movieId?.releaseDate.slice(0, 4) ||
                    s?.releaseDate.slice(0, 4)}
                </h5>
              </div>
              <h3>{s.title || s?.movieId?.title}</h3>
            </li>
          ))
        : series.map((s, index) => (
            <li
              onClick={() =>
                window.location.replace(
                  `/series/${s.slug || s?.seriesId?.slug}`
                )
              }
              key={index}
              className="series-card-item"
            >
              <img
                src={s.image || s?.seriesId?.image}
                loading="lazy"
                alt={s.title || s?.seriesId?.title}
                width="150"
              />
              <div className="series-info">
                <div className="episode-info">
                  <p>{s?.episode?.length || s?.seriesId?.episode?.length}</p>
                  <h5 style={{ color: "yellow" }}>
                    {s?.seriesId?.releaseDate?.slice(0, 4) ||
                      s?.releaseDate?.slice(0, 4)}
                  </h5>
                </div>
                {counter-- > 0 && (
                  <h4 style={{ padding: "0 10px" }} className="glow-animate">
                    New
                  </h4>
                )}
                <h3>{s.title || s?.seriesId?.title}</h3>
              </div>
            </li>
          ))}
    </ul>
  );
};

export default SeriesCard;
