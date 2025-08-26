// import { useState } from "react";
// import axios from "axios";
import { useState } from "react";
import { useSeriesContext } from "../../context/seriesContext";
import axios from "axios";

function SearchAll() {
  const { results } = useSeriesContext();

  return (
    <div>
      {/* <div>
        <input
          type="text"
          placeholder="Search movies & series..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div> */}

      <h3>Movies</h3>
      <ul>
        {(results.movies || []).map((m) => (
          <li key={m._id}>{m.title}</li>
        ))}
      </ul>

      <h3>Series</h3>
      <ul>
        {(results.series || []).map((s) => (
          <li key={s._id}>{s.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchAll;
