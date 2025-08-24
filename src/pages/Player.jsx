import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSeriesContext } from "../context/seriesContext";
import "./CSS/Player.css";
import SeriesCard from "../components/SeriesCard/SeriesCard";
import AdsterraBanner from "../components/Adsterra/AdsterraBanner";

const Player = () => {
  const { getSingleSeries, singleSeries, series, getAllSeries } =
    useSeriesContext();
  const [episode, setEpisode] = useState(0);
  const { seriesId } = useParams();
  console.log("episode", episode);
  useEffect(() => {
    getSingleSeries(seriesId);
    getAllSeries();
  }, [seriesId]);

  return (
    <div className="Player">
      <AdsterraBanner />

      <div className="video-player">
        <h1>{singleSeries?.title}</h1>
        <h1>Episode {episode + 1}</h1>
        {singleSeries._id === "68aade15210f44e770bd1867" ? (
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
        ) : (
          <iframe
            src={
              singleSeries?.episode && singleSeries.episode[episode]
                ? singleSeries.episode[episode]
                : ""
            }
            width="560"
            height="315"
            frameborder="0"
            allowfullscreen=""
            title="episode"
          ></iframe>
        )}
      </div>

      <div className="next-previous">
        {episode > 0 ? (
          <button onClick={() => setEpisode(episode - 1)}>Previous</button>
        ) : (
          <></>
        )}
        {singleSeries?.episode?.length - 1 === episode ? (
          <></>
        ) : (
          <button onClick={() => setEpisode(episode + 1)}>Next</button>
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
        <h1>Series List</h1>
        <div className="series-list">
          <SeriesCard />
        </div>
      </div>
    </div>
  );
};

export default Player;
