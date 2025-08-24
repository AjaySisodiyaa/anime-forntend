import { createContext, useContext, useState } from "react";
import axios from "axios";

const SeriesContext = createContext();

export const SeriesContextProvider = ({ children }) => {
  const [series, setSeries] = useState([]);
  const [singleSeries, setSingleSeries] = useState([]);

  const getAllSeries = async () => {
    try {
      const res = await axios.get("http://localhost:4000/series");
      console.log("res", res.data);
      setSeries(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getSingleSeries = async (seriesId) => {
    try {
      const res = await axios.get(`http://localhost:4000/series/${seriesId}`);
      console.log("res", res.data);
      setSingleSeries(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SeriesContext.Provider
      value={{ series, getAllSeries, getSingleSeries, singleSeries }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

export const useSeriesContext = () => useContext(SeriesContext);
