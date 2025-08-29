import React, { useState, useEffect } from "react";
import "./VideoFeed.css";
export default function VideoPlayer() {
  const [video, setVideo] = useState(null);

  const fetchVideo = async () => {
    const res = await fetch(
      "https://anime-backend-5ok3.onrender.com/random-video"
      //   "http://localhost:4000/random-video"
    ); // your backend
    const data = await res.json();
    setVideo(data);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="video-wrapper">
      <iframe
        id="yt-player"
        width="400"
        height="700"
        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=0&enablejsapi=1&playsinline=1&controls=0&loop=1&playlist=${video.id.videoId}`}
        title={video.snippet.title}
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>

      <button className="next-btn" onClick={fetchVideo}>
        Next ▶
      </button>
      <h3 className="video-title">{video.snippet.title}</h3>
    </div>
  );
}
