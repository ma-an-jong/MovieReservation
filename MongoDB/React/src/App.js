import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import React, { useState, useRef, useCallback, useEffect } from "react";

//components
import Header from "./components/Header";
import ReactiveHeader from "./components/ReactiveHeader";
import Nav from "./components/Nav";
import Visual from "./components/Visual";
import MovieChart from "./components/MovieChart";
import Movies from "./components/Movies";
import Theater from "./components/Theater";
import EventChart from "./components/EventChart";
import Reservation from "./components/Reservation";

const event1 = {
  name: "[마녀2]CGV 필름마크",
  image:
    "https://img.cgv.co.kr/WebApp/contents/eventV4/34681/16546637226960.jpg",
  startDate: "2022.06.08",
  endDate: "2022.07.03",
};

const event2 = {
  name: "[버즈 라이트이어]CGV 필름마크",
  image:
    "https://img.cgv.co.kr/WebApp/contents/eventV4/34680/16546636291360.jpg",
  startDate: "2022.06.08",
  endDate: "2022.07.03",
};

const event3 = {
  name: "[브로커]CGV 필름마크",
  image:
    "https://img.cgv.co.kr/WebApp/contents/eventV4/34641/16541443521240.jpg",
  startDate: "2022.06.02",
  endDate: "2022.06.26",
};

const event4 = {
  name: "[한국 영화 천만 달성 기념]CGV가 천만P 쏜다!",
  image:
    "https://img.cgv.co.kr/WebApp/contents/eventV4/34711/16551031062270.jpg",
  startDate: "2022.06.13",
  endDate: "2022.06.23",
};

const user = {
  id: "629b6cf882817349461b0f60",
  login_id: "admin",
  password: "1234",
  user_name: "김민종",
};

const eventArr = [event1, event2, event3, event4];

function App() {
  const [movies, setMovies] = useState(false);
  //const [theaters, setTheaters] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8800/movie")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
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
      <div class="mainNav col-md-12">
        <div class="container">
          <Nav />
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div class="visual col-md-12 fit">
                <Visual />
              </div>
              <div class="movieChart col-md-12">
                <div class="container">
                  {movies ? <MovieChart movies={movies} user={user} /> : null}
                </div>
              </div>
              <div className="eventSection col-md-12">
                <div className="container">
                  {movies ? <EventChart events={eventArr} user={user} /> : null}
                </div>
              </div>
            </>
          }
        />

        {movies ? (
          <Route
            exact
            path="Movies"
            element={<Movies movies={movies} user={user} />}
          />
        ) : null}
        <Route
          exact
          path="/Theater"
          element={<Reservation movies={movies} user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
