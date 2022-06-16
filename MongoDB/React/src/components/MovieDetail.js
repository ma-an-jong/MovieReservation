import CommentPage from "./CommentPage";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const MovieDetail = (props) => {
  // var element = movieData[clickedMovie];
  const { movieId } = useParams();
  const [movie, setMovie] = useState(false);

  for (let i = 0; i < props.movies.length; i++) {
    if (movieId === props.movies[i].id && !movie) {
      setMovie(props.movies[i]);
      break;
    }
  }

  return (
    <div className="container">
      <div className="movieDetail col-md-12 row">
        <div className="DetailInfoSection col-md-12 row">
          {movie ? (
            <div className="detailImage col-md-3">
              <img src={movie.image} alt={movie.title} title={movie.title} />
            </div>
          ) : null}

          <div className="detailInfo col-md-9">
            {movie ? (
              <div className="detail_title">
                <ul>
                  <span>상영중</span>
                  <li>
                    <h2>{movie.title}</h2>
                  </li>
                  <li>
                    <p>
                      예매율 {movie.reservation}% &nbsp; 평점 {movie.GPA}
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}

            <div className="underLine"></div>

            <div className="detail_detailInfo">
              <p>감독 : 강수성</p>
              <p>장르 : 장르 / 기본 : 15세 이상, 제작국</p>
              <p>개봉 : 2022.06.22</p>
              <button>예매하기</button>
            </div>
          </div>
        </div>
        <div className="comment_section col-md-12">
          <CommentPage user={props.user} movieId={movieId} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
