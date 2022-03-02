import React from "react";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

function MovieCard(props) {
  const { title, release_date, vote_average, poster_path } = props.movie;

  const calcPathColor = (average) => {
    if (average > 6.5) return "#21c774";
    else if (average > 4.0) return "#d2d531";
    else if (average > 0.0) return "#da2360";
    else return "#000000";
  };

  const calcTrailColor = (average) => {
    if (average > 6.0) return "#1d3f28";
    else if (average > 4.0) return "#3e3b10";
    else if (average > 0.0) return "#4d1432";
    else return "#222222";
  };

  return (
    <div className="moviecard">
      <div className="moviecard__image">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
        ) : (
          <img src={"/dummy.png"} alt="" />
        )}
      </div>
      <div className="moviecard__content">
        <div className="moviecard__content__circle">
          <CircularProgressbarWithChildren
            value={vote_average}
            maxValue={10.0}
            styles={buildStyles({
              // pathColor: "#21c774",
              pathColor: calcPathColor(vote_average),

              trailColor: calcTrailColor(vote_average),
              backgroundColor: "#000000",
            })}
          >
            <div>
              {`${Number(vote_average) * 10.0}`}
              <span>%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <h2>{title}</h2>
        <p>
          {new Date(release_date).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
