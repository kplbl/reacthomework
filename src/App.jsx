import { useEffect, useState } from "react";
import axios from "axios";
import {
  ChevronRightIcon,
  SearchIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import List from "./components/List";
import FilterCard from "./components/FilterCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&page=${page}&with_genres=${selectedGenres.join(",")}`
      )
      .then((response) => {
        if (page > 1) {
          setMovies((state) => [...state, ...response.data.results]);
        } else {
          setMovies(response.data.results);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getGenres = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }`
      )
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const submitSearch = () => {
    setPage(1);
    getMovies();
  };

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div className="App">
      <header>
        <nav>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="The Movie Database (TMDB)"
            width="154"
            height="20"
          ></img>
          <div className="nav__link">Movies</div>
          <div className="nav__link">TV Shows</div>
          <div className="nav__link">People</div>
          <div className="nav__link">More</div>
        </nav>
        <div className="header__extra">
          <PlusIcon className="header__extra__icon" />
          <div className="header__extra__lang">EN</div>
          <div>Login</div>
          <div>Join TMDB</div>
          <SearchIcon className="header__extra__icon" />
        </div>
      </header>
      <main className="main__wrapper">
        <h2 className="main__title">Popular Movies</h2>
        <div className="main__content">
          <aside className="main__aside">
            <div className="main__aside__card">
              <div className="main__aside__card__box">
                <div className="main__aside__card__box__text">Sort</div>

                <ChevronRightIcon className="main__aside__card__box__icon" />
              </div>
            </div>
            <FilterCard
              genres={genres}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
            />
            <div className="main__aside__card">
              <div className="main__aside__card__box">
                <div className="main__aside__card__box__text">
                  Where to watch
                </div>
                <ChevronRightIcon className="main__aside__card__box__icon" />
              </div>
            </div>
            <button
              onClick={submitSearch}
              className={`main__aside__search-btn ${
                selectedGenres.length > 0
                  ? "main__aside__search-btn__enabled"
                  : "main__aside__search-btn__disabled"
              }`}
            >
              Search
            </button>
          </aside>
          <div className="main__column">
            <List className="main__list" movies={movies} />
            <button
              className="main__loadmore"
              onClick={() => setPage((state) => state + 1)}
            >
              Load More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
