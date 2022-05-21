import React, { useState, useEffect } from "react";
import instance from "../../axios";
import requests from "../../requests";
import Button from "../button/Button";
import "./banner.css";

const imgBaseUrl = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await await instance.get(requests.fetchTrending);
      setBannerMovie(
        response.data.results[
          Math.floor(Math.random() * (response.data.results.length - 1))
        ]
      );
      return response;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imgBaseUrl}${bannerMovie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
      className="banner"
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {bannerMovie?.name ||
            bannerMovie?.title ||
            bannerMovie?.original_name}
        </h1>

        <div className="banner-buttons">
          <Button text="Play" />
          <Button text="My List" />
        </div>

        <h1 className="banner-description">
          {truncate(bannerMovie?.overview, 150)}
        </h1>
      </div>
      <div className="faded-bottom"></div>
    </header>
  );
};

export default Banner;
