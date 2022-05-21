import React, { useState, useEffect } from "react";
import instance from "../../axios";
import "./movierows.css";

const imgBaseUrl = "https://image.tmdb.org/t/p/original";

const MovieRows = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {/* {POSTERS CONTAINER} */}

        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row-poster ${isLargeRow && "row-poster-large"}`}
              src={`${imgBaseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieRows;
