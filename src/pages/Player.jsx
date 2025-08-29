import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSeriesContext } from "../context/seriesContext";
import "./CSS/Player.css";
import SeriesCard from "../components/SeriesCard/SeriesCard";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import SEO from "../helpers/SEO";
import Loading from "../components/Loaidng/Loading";

const Player = () => {
  const {
    getSingleSeries,
    singleSeries,
    getSingleMovie,
    singleMovie,
    getPopularMovies,
    getPopularSeries,
    UpdateMovieViews,
    updateSeriesViews,
    popularMovies,
    popularSeries,
  } = useSeriesContext();
  const [episode, setEpisode] = useState(0);
  const { slug } = useParams();
  useEffect(() => {
    getSingleMovie(slug);
    getSingleSeries(slug);
    getPopularMovies();
    getPopularSeries();
    UpdateMovieViews(singleMovie?._id);
    updateSeriesViews(singleSeries?._id);

    // UpdateSeriesViews(singleSeries?._id);
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, episode, singleMovie?._id, singleSeries?._id]);
  return (
    <div className="Player">
      <SEO singleSeries={singleSeries} singleMovie={singleMovie} />
      <div className="video-player">
        <div style={{ backgroundColor: "black", overflow: "hidden" }}>
          <iframe
            src={
              singleSeries?.episode && singleSeries.episode[episode]
                ? singleSeries.episode[episode]
                : singleMovie?.movie
            }
            width="560"
            height="315"
            frameborder="0"
            allowfullscreen=""
            title="episode"
            style={{ overflow: "hidden" }}
            scrolling="no"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>

        <div className="player-info" style={{}}>
          {/* <h1>{singleSeries?.title || singleMovie?.title}</h1> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            {singleSeries?.episode && <h3>Episode {episode + 1}</h3>}
            <div className="next-previous">
              {episode > 0 ? (
                <button onClick={() => setEpisode(episode - 1)}>
                  &lt; Previous
                </button>
              ) : (
                <></>
              )}
              {singleSeries?.episode?.length - 1 > episode ? (
                <button onClick={() => setEpisode(episode + 1)}>
                  Next &gt;
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="episode-list">
        {singleSeries?.episode?.length > 1 &&
          singleSeries?.episode?.map((e, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setEpisode(index);
                }}
              >
                Episode {index + 1}
              </button>
            </div>
          ))}
      </div>
      <AdsterraBanner />
      <div className="poster-container">
        <img
          className="poster"
          src={singleSeries?.image || singleMovie?.image}
          alt=""
        />
        <div className="player-info">
          <h1>{singleSeries?.title || singleMovie?.title}</h1>
          <p className="description">
            {singleSeries?.description || singleMovie?.description}
          </p>
        </div>
      </div>
      <div className="Home">
        <div className="series-list">
          <h1>Top Movies</h1>
          <SeriesCard Stype="movie" movies={popularMovies} />
          <h1>Top Series</h1>
          <SeriesCard series={popularSeries} Stype="series" />
        </div>
      </div>
    </div>
  );
};

export default Player;
