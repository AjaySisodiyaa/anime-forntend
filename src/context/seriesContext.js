import { createContext, useContext, useState } from "react";
import axios from "axios";

const SeriesContext = createContext();

export const SeriesContextProvider = ({ children }) => {
  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [singleSeries, setSingleSeries] = useState([]);
  const [singleMovie, setSingleMovie] = useState([]);

  // get all series
  const getAllSeries = async () => {
    try {
      const res = await axios.get(
        "https://anime-backend-5ok3.onrender.com/series"
      );

      setSeries(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // get single series
  const getSingleSeries = async (seriesId) => {
    try {
      const res = await axios.get(
        `https://anime-backend-5ok3.onrender.com/series/id/${seriesId}`
      );

      setSingleSeries(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // get all movies
  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        "https://anime-backend-5ok3.onrender.com/movie"
      );

      setMovies(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // get single movie
  const getSingleMovie = async (movieId) => {
    try {
      const res = await axios.get(
        `https://anime-backend-5ok3.onrender.com/movie/id/${movieId}`
      );

      setSingleMovie(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SeriesContext.Provider
      value={{
        series,
        getAllSeries,
        getSingleSeries,
        singleSeries,
        getAllMovies,
        getSingleMovie,
        movies,
        singleMovie,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

export const useSeriesContext = () => useContext(SeriesContext);
