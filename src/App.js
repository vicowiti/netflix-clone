import "./App.css";
import Banner from "./components/banner/Banner";
import MovieRows from "./components/row/MovieRows";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Banner />
      <MovieRows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MovieRows title="TRENDING" fetchUrl={requests.fetchTrending} />
      <MovieRows title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <MovieRows title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <MovieRows title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <MovieRows title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRows title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <MovieRows
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  );
}

export default App;
