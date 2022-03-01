import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&page=1`
      );
      setMovies(response.data.results);
    };

    getMovies();
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <div className="nav__logo">TMDB</div>
          <div className="nav__link">Movies</div>
          <div className="nav__link">TV Shows</div>
          <div className="nav__link">People</div>
          <div className="nav__link">More</div>
        </nav>
        <div className="header__extra">
          <div>Login</div>
          <div>Join TMDB</div>
          <div>Search</div>
        </div>
      </header>
      <main className="main__wrapper">
        <h2 className="main__title">Popular Movies</h2>
        <div className="main__content">
          <aside className="main__aside">
            <div className="main__aside__card">
              <div className="main__aside__card__text">Sort</div>{" "}
            </div>
            <div className="main__aside__card">
              <div className="main__aside__card__text">Filters</div>
            </div>
            <div className="main__aside__card">
              <div className="main__aside__card__text">Where to watch</div>
            </div>
            <div className="main__aside__search-btn main__aside__search-btn__enabled">
              Search
            </div>
          </aside>
          <List className="main__list" movies={movies} />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
