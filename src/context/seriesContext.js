import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SeriesContext = createContext();

export const SeriesContextProvider = ({ children }) => {
  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [singleSeries, setSingleSeries] = useState([]);
  const [singleMovie, setSingleMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ movies: [], series: [] });
  const [type, setType] = useState("");
  const navigate = useNavigate();

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
  const getSingleSeries = async (seriesSearch) => {
    try {
      console.log(seriesSearch, "seriesSearch------>");
      const res = await axios.get(
        `https://anime-backend-5ok3.onrender.com/series/${seriesSearch}`
      );
      console.log(res.data, "res.data");

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
  const getSingleMovie = async (movieSearch) => {
    try {
      const res = await axios.get(
        `https://anime-backend-5ok3.onrender.com/movie/${movieSearch}`
      );

      setSingleMovie(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Global Searching

  const handleSearch = async (e) => {
    e.preventDefault();
    navigate("/search");
    const { data } = await axios.get(
      `https://anime-backend-5ok3.onrender.com/search/${query}`
    );
    setResults({
      movies: data.movies || [], // ✅ fallback to empty array
      series: data.series || [],
    });
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
        handleSearch,
        setQuery,
        query,
        results,
        setResults,
        type,
        setType,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

export const useSeriesContext = () => useContext(SeriesContext);
