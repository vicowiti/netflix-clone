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
      <MovieRows title="Trending" fetchUrl={requests.fetchTrending} />
      <MovieRows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <MovieRows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRows
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  );
}

export default App;
