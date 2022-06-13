import React from "react";

const Movie = (props) => {
  return (
    <div className="movie_movieCard">
      <div className="movie_chartNumber">
        <p>No.{props.cardOrder + 1}</p>
      </div>
      <div className="movie_movieImg">
        <img
          src={props.movieInfo.image}
          alt={props.movieInfo.title}
          title={props.movieInfo.title}
        />
      </div>
      <div className="movie_movieInfo">
        <h3>{props.movieInfo.title}</h3>
        <p>
          예매율 {props.movieInfo.reservation} &nbsp; {props.movieInfo.GPA}
        </p>
        <p>개봉 날짜</p>
        <button>예매하기</button>
      </div>
    </div>
  );
};

export default Movie;
