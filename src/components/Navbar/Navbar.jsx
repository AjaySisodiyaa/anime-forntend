import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSeriesContext } from "../../context/seriesContext";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { query, setQuery, handleSearch } = useSeriesContext();
  const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    if (location.key !== "default") {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="Navbar">
      <div
        className="mobiel-nav-feed glow-animate"
        onClick={() => window.location.replace("/feed")}
      >
        Feed
      </div>
      <div
        onClick={() =>
          document.querySelector(".mobiel-links").classList.toggle("hide")
        }
        className="hamburger "
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        onClick={() =>
          document.querySelector(".mobiel-links").classList.toggle("hide")
        }
        className="mobiel-links hide"
      >
        <form className="mobile-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search...."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mobile-search-input"
            onClick={() =>
              document.querySelector(".mobiel-links").classList.toggle("hide")
            }
          />
          <button type="submit" className="mobile-search-button">
            Search
          </button>
        </form>

        <Link className="mobiel-nav-link" to="/">
          Home
        </Link>
        <Link className="mobiel-nav-link" to="/series">
          Series
        </Link>
        <Link className="mobiel-nav-link" to="/movies">
          Movies
        </Link>
      </div>
      <div className="links">
        <div
          className="nav-link glow-animate"
          onClick={() => window.location.replace("/feed")}
        >
          Feed
        </div>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/series">
          Series
        </Link>
        <Link className="nav-link" to="/movies">
          Movies
        </Link>
      </div>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search...."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      <div onClick={() => onGoBack()} className="logo-container">
        <img src="/logo.png" alt="" />
        <h1 className="glow-animate">Movista</h1>
      </div>
    </div>
  );
};

export default Navbar;
