import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Player from "./pages/Player";
import { SeriesContextProvider } from "./context/seriesContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <SeriesContextProvider>
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
