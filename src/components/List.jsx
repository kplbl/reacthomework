import React from "react";
import MovieCard from "./MovieCard";

function List({ movies }) {
  if (!movies) return <div />;

  return (
    <div className="main__list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}{" "}
    </div>
  );
}

export default List;
