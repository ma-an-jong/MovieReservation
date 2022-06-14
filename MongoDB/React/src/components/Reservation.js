import React, { useState } from "react";
import Header from "./Header";
import ReactiveHeader from "./ReactiveHeader";

const Reservation = (props) => {
  const [selectMovie, setSelectMovie] = useState(false);
  const [selectShow, seatSelectShow] = useState(false);

  return (
    <div className="reservation-page">
      <div class="header col-md-12">
        <div class="container">
          <div class="longHeader">
            <Header />
          </div>
          <div class="short">
            <ReactiveHeader />
          </div>
        </div>
      </div>
      <div className="reservation-select container">
        <div className="movie-select">
          <div className="select-head">
            <h3>영화</h3>
          </div>
          <div className="select-movie">
            <div className="list">
              {props.movies.map((m) => (
                <ul>
                  <li>
                    <a
                      title={m.title}
                      alt={m.title}
                      onclick={setSelectMovie(m)}
                    >
                      {m.title}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
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
                  {/* <span className="dimenInfo">{props.demenInfo}</span>
                  <span className="floorInfo">{props.floor}</span>
                  <span className="seatCount">{props.seatCount}</span> */}
                </div>
                {/* {props.timeList.map((m) => (
                  <ul>
                    <li>{m}</li>
                  </ul>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-reservation-info">
        <div className="banner">
          {/* <div className="movie-info">
            <div className="movie-poster">
              <img
                src={props.movies[0].image}
                alt={props.movies[0].title}
                title={props.movies[0].title}
              ></img>
            </div>
            <span className="movie-name">{props.movies[0].title}</span>
          </div> */}
          <div className="select-info">
            <div className="select-theater">
              <span>극장</span>
              <span className="span-info">구미 CGV</span>
            </div>
            <div className="select-date">
              <span>일시</span>
              <span className="span-info">2022-06-16</span>
            </div>
            <div className="select-room">
              <span>상영관</span>
              <span id="room" className="span-info"></span>
            </div>
          </div>
          <div className="step">
            <span className="seat-Select" title="좌석선택"></span>
            <span className="pay" title="결제"></span>
          </div>
          <div className="seatSelectBtn">
            <a className="seatSelect"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
