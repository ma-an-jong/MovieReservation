import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";
import ReactiveHeader from "./ReactiveHeader";

const SeatSelectPage = (props) => {
  const [theater, setTheaters] = useState(false);
  const { select } = useParams();
  const [already, setAlready] = useState(false);
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  let [inputValue3, setInputValue3] = useState("");
  let [inputValue4, setInputValue4] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8800/theater/" + 2)
      .then((res) => {
        setTheaters(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8800/reservation/62a8c5766312009034c8a706")
      .then((res) => {
        setAlready(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onReservationListener = (e) => {
    e.preventDefault();

    const context = [];
    const seats = [];
    if (inputValue1 !== "") seats.push(Number(inputValue1));
    if (inputValue2 !== "") seats.push(Number(inputValue2));
    if (inputValue3 !== "") seats.push(Number(inputValue3));
    if (inputValue4 !== "") seats.push(Number(inputValue4));
    seats.map((seat) => {
      context.push({
        user: props.user.id,
        show: props.shows[select]._id,
        theater: theater[seat - 1],
      });
    });
    axios
      .post("http://localhost:8800/reservation/reservationShow", {
        context,
      })
      .then(function (response) {
        // response
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <img
        className="grid-img"
        src="https://blog.kakaocdn.net/dn/1Fjqw/btrnClh0T4o/u4DDq3IWlnQJPjjKjlREUk/img.jpg"
      ></img>
      <p>이미 예약된 좌석: </p>
      {already
        ? already.map((v) => <span>{v.theater.seat} &nbsp;</span>)
        : null}
      <form>
        <div>
          <strong>좌석 번호</strong>
          <input
            type="text"
            onChange={(event) => setInputValue1(event.target.value)}
          ></input>
        </div>
        <div>
          <strong>좌석 번호</strong>
          <input
            type="text"
            onChange={(event) => setInputValue2(event.target.value)}
          ></input>
        </div>
        <div>
          <strong>좌석 번호</strong>
          <input
            type="text"
            onChange={(event) => setInputValue3(event.target.value)}
          ></input>
        </div>
        <div>
          <strong>좌석 번호</strong>
          <input
            type="text"
            onChange={(event) => setInputValue4(event.target.value)}
          ></input>
        </div>
        <button onClick={onReservationListener}> 예매</button>
      </form>
    </div>
  );
};

export default SeatSelectPage;
