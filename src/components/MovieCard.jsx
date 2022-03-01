import React from "react";

function MovieCard(props) {
  const { original_title, release_date, vote_average, poster_path } =
    props.movie;

  return (
    <div className="moviecard">
      <div className="moviecard__image">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
      </div>
      <div className="moviecard__content">
        <h2>{original_title}</h2>
        <p>
          {new Date(release_date).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <div className="moviecard__percent">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
