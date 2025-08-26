import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSeriesContext } from "../../context/seriesContext";

const Navbar = () => {
  const { query, setQuery, handleSearch } = useSeriesContext();

  return (
    <div className="Navbar">
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
      <div className="mobiel-links hide">
        <form className="mobile-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search...."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mobile-search-input"
          />
          <button
            onClick={() =>
              document.querySelector(".mobiel-links").classList.toggle("hide")
            }
            type="submit"
            className="mobile-search-button"
          >
            Search
          </button>
        </form>
        <Link
          onClick={() =>
            document.querySelector(".mobiel-links").classList.toggle("hide")
          }
          className="mobiel-nav-link"
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() =>
            document.querySelector(".mobiel-links").classList.toggle("hide")
          }
          className="mobiel-nav-link"
          to="/series"
        >
          Series
        </Link>
        <Link
          onClick={() =>
            document.querySelector(".mobiel-links").classList.toggle("hide")
          }
          className="mobiel-nav-link"
          to="/movies"
        >
          Movies
        </Link>
      </div>
      <div className="links">
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

      <div
        onClick={() => window.location.replace("/")}
        className="logo-container"
      >
        <img src="/logo.png" alt="" />
        <h1 className="glow-animate">Majelo</h1>
      </div>
    </div>
  );
};

export default Navbar;
