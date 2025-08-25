import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSeriesContext } from "../context/seriesContext";
import "./CSS/Player.css";
import SeriesCard from "../components/SeriesCard/SeriesCard";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import MovieCard from "../components/MovieCard/MovieCard";
import { Title, Meta, Link } from "react-head";

const Player = () => {
  const { getSingleSeries, singleSeries, getSingleMovie, singleMovie } =
    useSeriesContext();
  const [episode, setEpisode] = useState(0);
  const { type, Id } = useParams();
  console.log("episode", episode);
  useEffect(() => {
    if (type === "series") {
      getSingleSeries(Id);
    }
    if (type === "movie") {
      getSingleMovie(Id);
    }
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Id, episode]);

  return (
    <div className="Player">
      <AdsterraBanner />

      <div className="video-player">
        <Title>{singleSeries.title || singleMovie.title} | Majelo</Title>
        <Meta
          name="description"
          content={singleSeries.title || singleMovie.title}
        />
        <Meta
          name="keywords"
          content={singleSeries.title || singleMovie.title}
        />

        {singleSeries._id === "68aade15210f44e770bd1867" ? (
          <div>
            <iframe
              src={
                singleSeries?.episode && singleSeries.episode[episode]
                  ? `https://short.icu/${singleSeries.episode[episode]}`
                  : ""
              }
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen=""
              title="episode"
            ></iframe>
          </div>
        ) : (
          <div>
            <Link
              rel="canonical"
              href={`https://majelo.onrender.com/${type}/${Id}`}
            />
            <iframe
              src={
                singleSeries?.episode &&
                singleSeries.episode[episode] &&
                type === "series"
                  ? singleSeries.episode[episode]
                  : singleMovie?.movie
              }
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen=""
              title="episode"
            ></iframe>
          </div>
        )}
        <div className="player-info">
          <h1>{singleSeries?.title}</h1>
          <h3>Episode {episode + 1}</h3>
        </div>
      </div>

      <div className="next-previous">
        {episode > 0 ? (
          <button onClick={() => setEpisode(episode - 1)}>&lt; Previous</button>
        ) : (
          <></>
        )}
        {singleSeries?.episode?.length - 1 === episode ? (
          <></>
        ) : (
          <button onClick={() => setEpisode(episode + 1)}>Next &gt;</button>
        )}
      </div>

      <div className="episode-list">
        {singleSeries?.episode?.map((e, index) => (
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
      <div className="Home">
        <div className="series-list">
          <h1>Top Movies</h1>
          <MovieCard />
          <h1>Top Series</h1>
          <SeriesCard />
        </div>
      </div>
    </div>
  );
};

export default Player;
