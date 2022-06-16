import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Movie from "./Movie";
import MovieDetail from "./MovieDetail";

const Options = [
  { key: 1, value: "예매율순" },
  { key: 2, value: "평점순" },
];

function Movies(props) {
  const [Content, setContent] = useState(1);
  const [clickedMovie, setClickedMovie] = useState();

  const onChangeHandler = (e) => {
    setContent(Number(e.target.value));
  };

  var reservationArr = JSON.parse(JSON.stringify(props.movies));
  reservationArr.sort((b, a) => a.reservation - b.reservation);

  var gradeArr = JSON.parse(JSON.stringify(props.movies));
  gradeArr.sort((b, a) => {
    if (a.GPA === b.GPA) {
      return a.reservation - b.reservation;
    } else {
      return a.GPA - b.GPA;
    }
  });
  //console.log(gradeArr);
  console.log(props.movies);
  const reserv = reservationArr.map((m, index) => (
    <Movie movieInfo={m} cardOrder={index} setClickedMovie={setClickedMovie} />
  ));

  const grade = gradeArr.map((m, index) => (
    <Movie movieInfo={m} cardOrder={index} setClickedMovie={setClickedMovie} />
  ));

  return (
    <div className="container">
      <Routes>
        <Route
          path=""
          element={
            <>
              <div className="moviesTitle">
                <h2>무비차트</h2>
                <div></div>
              </div>
              <div class="moviesMenu">
                <div>
                  <select onChange={onChangeHandler} value={Content}>
                    {Options.map((item) => (
                      <option key={item.key} value={item.key}>
                        {item.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div class="moviesContainer">
                {Content === 1 ? reserv : grade}
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default Movies;
