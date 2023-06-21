import { useEffect, useState } from "react";
import { MovieSearchItem, MovieSearchResult } from "./types";
import MovieCard from "./components/movie-card";
import Search from "./components/search";
import Header from "./components/header";
import Footer from "./components/footer";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=68f98cbf";

const App = () => {
  const [movies, setMovies] = useState<MovieSearchItem[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const searchMovies = async (title: string) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = (await response.json()) as MovieSearchResult;
      setMovies(data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    searchMovies("babu");
  }, []);

  return (
    <div className="app">
      <Header />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchMovie={searchMovies}
      />
      {movies && movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>404, Movie not found</h2>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
