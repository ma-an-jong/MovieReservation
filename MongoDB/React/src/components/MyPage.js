import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ReactiveHeader from "./ReactiveHeader";

const MyPage = (props) => {
  const [reservation, setReservation] = useState(false);

  const onDelete = (e) => {
    const reserv = reservation[e.currentTarget.value];
    console.log(reserv._id);
    e.preventDefault();
    axios
      .delete("http://localhost:8800/reservation/" + reserv._id)
      .then((res) => {
        const newReservation = [];
        for (let i = 0; i < reservation.length; i++) {
          if (reservation[i]._id !== reserv._id) {
            newReservation.push(reservation[i]);
          }
        }
        setReservation(newReservation);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8800/reservation/user/" + props.user.id)
      .then((res) => {
        const userReservations = [];

        res.data.reservations.map((v) => {
          userReservations.push(v);
        });
        setReservation(userReservations);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="myPage container">
      <div className="myPageInfo">
        <div className="member-info-container">
          <div className="member-info">
            <div className="member-name">
              <span class="name">{props.user.user_name}님</span>
              <span className="memberId"> {props.user.login_id}</span>
            </div>
          </div>
        </div>
        {reservation ? (
          <div className="reservationList-container">
            <span>My 예매내역 </span>
            <span className="count">{reservation.length}건</span>
            <div className="reservationList">
              <div className="reservation-content">
                <div className="nonNulllist">
                  {reservation.map((m, index) => (
                    <ul>
                      <li>
                        <a>영화 제목: {m.show.movie.title} </a>
                        <a>극장: 구미 CGV </a>
                        <a>일시: {m.show.time} </a>
                        <a>상영관: {m.theater.floor} 층</a>
                        <a>{m.theater.seat}번 좌석</a>
                      </li>
                      <button value={index} onClick={onDelete}>
                        삭제
                      </button>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MyPage;
