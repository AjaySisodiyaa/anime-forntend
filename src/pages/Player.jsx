import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSeriesContext } from "../context/seriesContext";
import "./CSS/Player.css";
import SeriesCard from "../components/SeriesCard/SeriesCard";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";
import MovieCard from "../components/MovieCard/MovieCard";
import SEO from "../helpers/SEO";

const Player = () => {
  const { getSingleSeries, singleSeries, getSingleMovie, singleMovie } =
    useSeriesContext();
  const [episode, setEpisode] = useState(0);
  const { type, slug } = useParams();
  console.log("episode", episode);
  useEffect(() => {
    // if (type) {
    getSingleMovie(slug);
    // } else {
    getSingleSeries(slug);
    // }

    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, episode]);

  return (
    <div className="Player">
      <AdsterraBanner />
      {console.log(singleSeries, "singleSeries-------->")}
      <SEO singleSeries={singleSeries} singleMovie={singleMovie} />
      <div className="video-player">
        <div>
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
          ></iframe>
        </div>

        <div className="player-info">
          <h1>{singleSeries?.title || singleMovie?.title}</h1>
          {type === "series" && <h3>Episode {episode + 1}</h3>}
          <p className="description">
            {singleSeries?.description || singleMovie?.description}
          </p>
        </div>
      </div>

      <div className="next-previous">
        {episode > 0 && type === "series" ? (
          <button onClick={() => setEpisode(episode - 1)}>&lt; Previous</button>
        ) : (
          <></>
        )}
        {singleSeries?.episode?.length - 1 > episode && type === "series" ? (
          <button onClick={() => setEpisode(episode + 1)}>Next &gt;</button>
        ) : (
          <></>
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
