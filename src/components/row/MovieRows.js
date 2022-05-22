import movieTrailer from "movie-trailer";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import instance from "../../axios";
import "./movierows.css";

const imgBaseUrl = "https://image.tmdb.org/t/p/original";

const MovieRows = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function handleClick(movie) {
    const name =
      movie?.name ||
      movie?.original_name ||
      movie?.title ||
      movie?.original_title ||
      "";
    if (trailerUrl) {
      setTrailerUrl(name);
    } else {
      movieTrailer(name).then((url) => {
        //url => youtube link
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      });
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {/* {POSTERS CONTAINER} */}

        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row-poster ${isLargeRow && "row-poster-large"}`}
              src={`${imgBaseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              title={movie.name || movie.original_name || movie.title}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default MovieRows;
