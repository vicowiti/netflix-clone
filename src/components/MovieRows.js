import React, { useState, useEffect } from "react";
import instance from "../axios";

const MovieRows = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchData();
  }, [movies]);

  return (
    <div>
      {title}

      {/* {POSTERS CONTAINER} */}

      {movies.map((movie) => {
        return <li key={movie.original_name}>{movie.original_name}</li>;
      })}
    </div>
  );
};

export default MovieRows;
