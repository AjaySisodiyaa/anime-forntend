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
  const [loading, setLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  // get all series
  const getAllSeries = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://anime-backend-5ok3.onrender.com/series"
      );
      setSeries(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // get single series
  const getSingleSeries = async (seriesSearch) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://anime-backend-5ok3.onrender.com/series/${seriesSearch}`
      );

      setSingleSeries(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error(error);
    }
  };

  // get all movies
  const getAllMovies = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://anime-backend-5ok3.onrender.com/movie"
      );
      setMovies(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // get single movie
  const getSingleMovie = async (movieSearch) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://anime-backend-5ok3.onrender.com/movie/${movieSearch}`
      );

      setSingleMovie(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  //Global Searching

  const handleSearch = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      navigate("/search");
      const { data } = await axios.get(
        `https://anime-backend-5ok3.onrender.com/search/${query}`
      );
      setResults({
        movies: data.movies || [], // ✅ fallback to empty array
        series: data.series || [],
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const updateSeriesViews = async (id) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `https://anime-backend-5ok3.onrender.com/series/${id}/watch`
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const UpdateMovieViews = async (id) => {
    try {
      setLoading(true);

      const res = await axios.post(
        `https://anime-backend-5ok3.onrender.com/movie/${id}/watch`
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const getPopularMovies = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://anime-backend-5ok3.onrender.com/movie/popular"
      );

      setPopularMovies(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  const getPopularSeries = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://anime-backend-5ok3.onrender.com/series/popular"
      );

      setPopularSeries(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <SeriesContext.Provider
      value={{
        getPopularSeries,
        getPopularMovies,
        UpdateMovieViews,
        updateSeriesViews,
        popularMovies,
        popularSeries,
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
        setLoading,
        loading,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

export const useSeriesContext = () => useContext(SeriesContext);
