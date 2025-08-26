const fs = require("fs");
const axios = require("axios");

(async () => {
  const { data: movies } = await axios.get(
    "https://anime-backend-5ok3.onrender.com/api/movies"
  );
  const { data: series } = await axios.get(
    "https://anime-backend-5ok3.onrender.com/api/series"
  );

  const urls = [
    "https://majelo.onrender.com/",
    "https://majelo.onrender.com/movie",
    "https://majelo.onrender.com/series",
    "https://majelo.onrender.com/search",
    ...movies.map((m) => `https://majelo.onrender.com/movie/${m.slug}`),
    ...series.map((s) => `https://majelo.onrender.com/series/${s.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => `<url><loc>${url}</loc><priority>0.8</priority></url>`)
      .join("\n")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", xml);
})();
