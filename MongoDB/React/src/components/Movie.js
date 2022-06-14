import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <div className="movie_movieCard">
      <div className="movie_chartNumber">
        <p>No.{props.cardOrder + 1}</p>
      </div>
      <Link to="MovieDetail">
        <div
          className="movie_movieImg"
          data-order={props.cardOrder}
          onClick={(e) => {
            const order = e.currentTarget.dataset.order;
            console.log(order);
            props.setClickedMovie(order);
          }}
        >
          <img
            src={props.movieInfo.image}
            alt={props.movieInfo.title}
            title={props.movieInfo.title}
          />
        </div>
      </Link>
      <div className="movie_movieInfo">
        <h3>{props.movieInfo.title}</h3>
        <p>
          예매율 {props.movieInfo.reservation} &nbsp; 평점 {props.movieInfo.GPA}
        </p>
        <button>예매하기</button>
      </div>
    </div>
  );
};

export default Movie;
