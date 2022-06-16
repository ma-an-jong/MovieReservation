import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ReactiveHeader from "./ReactiveHeader";
import { Link } from "react-router-dom";

const Reservation = (props) => {
  const [shows, setShow] = useState(false);
  const [movies, setMovie] = useState(false);
  const [select, setSelect] = useState(false);

  const onClickHandler = (e) => {
    setSelect(e.currentTarget.dataset.value);
    e.preventDefault();
  };

  const [time, setTime] = useState(false);

  const onClickListener = (e) => {
    setTime(e.currentTarget.dataset.value);
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get("http://localhost:8800/show")
      .then((res) => {
        const resMovie = [];
        res.data.map((v) => {
          let flag = false;
          for (let i = 0; i < resMovie.length; i++) {
            if (resMovie[i].title === v.movie.title) {
              flag = true;
              break;
            }
          }

          if (!flag)
            resMovie.push({
              ...v.movie,
              floor: v.floor,
            });
        });

        setMovie(resMovie);
        setShow(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="reservation-page">
      <div className="reservation-select container">
        <div className="movie-select">
          <div className="select-head">
            <h3>영화</h3>
          </div>
          <div className="select-movie">
            {movies ? (
              <div className="list">
                <ul>
                  {movies.map((m, index) => (
                    <li>
                      <a
                        alt={m.title}
                        onClick={onClickHandler}
                        data-value={index}
                      >
                        {m.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <div class="time-select">
          <div className="select-head">
            <h3>시간</h3>
          </div>
          <div className="select-time">
            <div className="option">
              <span className="morning">조조</span>
              <span className="night">심야</span>
            </div>
            <div className="time-list">
              <div className="list-content">
                <div className="theater-info">
                  {select ? (
                    <div>
                      <span className="floorInfo">
                        상영관 : {movies[select].floor} 층
                      </span>{" "}
                      <br />
                      <span className="seatCount">
                        남은 좌석 :{" "}
                        {Number(100) - Number(shows[select].reservations)}
                      </span>
                      <br />
                      <span>
                        <button onClick={onClickListener} data-value={0}>
                          10:00
                        </button>{" "}
                        <button onClick={onClickListener} data-value={1}>
                          13:00
                        </button>
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-reservation-info">
        <div className="banner">
          {select ? (
            <div className="movie-info">
              <div className="movie-poster">
                <img
                  src={movies[select].image}
                  alt={movies[select].title}
                  height="100px"
                ></img>
              </div>
              <span className="movie-name">{movies[select].title}</span>
            </div>
          ) : null}
          <div className="select-info">
            <div className="select-theater">
              <span>극장</span>
              <span className="span-info">구미 CGV</span>
            </div>
            <div className="select-date">
              <span>일시</span>
              <span className="span-info">2022-06-16</span>
            </div>
            {select ? (
              <div className="select-room">
                <span>상영관</span>
                <span id="room" className="span-info">
                  {movies[select].floor} 층
                </span>
              </div>
            ) : null}
          </div>
          <div className="step">
            <span className="seat-Select" title="좌석선택"></span>
            <span className="pay" title="결제"></span>
          </div>

          <div className="seatSelectBtn">
            {time ? (
              <Link to={`/SeatSelectPage/${select}`}>
                <img className="seat-select-img" src="img/1.png"></img>
              </Link>
            ) : (
              <img className="seat-select-img" src="img/2.png"></img>
            )}
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
