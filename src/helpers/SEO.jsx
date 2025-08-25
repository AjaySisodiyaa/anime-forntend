import { Helmet } from "react-helmet";

function SEO({ singleSeries, singleMovie }) {
  const title = (singleSeries?.title || singleMovie?.title) + " | Majelo";
  const description =
    singleSeries?.description ||
    singleMovie?.description ||
    "Watch movies and series on Majelo.";
  const keywords =
    singleSeries?.tags?.join(",") || singleMovie?.tags?.join(",");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

export default SEO;
