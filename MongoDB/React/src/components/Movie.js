import React from "react";

const Movie = (props) => {
  console.log(props.movieInfo.image);
  return (
    <div className="movieCard_container">
      <div className="movieCard" data-order={props.movieOrder}>
        <img
          src={props.movieInfo.image}
          alt={props.movieInfo.title}
          title={props.movieInfo.title}
        />
        <h1 className="chartNumber">{props.cardOrder + 1}</h1>
        <div className="movieCardHover">
          <ul>
            <li>
              <button>상세보기</button>
            </li>
            <li>
              <button>예매하기</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="movieCardInfo">
        <h3>{props.movieInfo.title}</h3>
        <p>
          {props.movieInfo.GPA}% &nbsp; &nbsp; 예매율{" "}
          {props.movieInfo.reservation}%
        </p>
      </div>
    </div>
  );
};

export default Movie;
