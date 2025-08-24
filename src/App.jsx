import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Player from "./pages/Player";
import { SeriesContextProvider } from "./context/seriesContext";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <div className="App">
      <SeriesContextProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:seriesId" element={<Player />} />
        </Routes>
      </SeriesContextProvider>
    </div>
  );
}

export default App;
