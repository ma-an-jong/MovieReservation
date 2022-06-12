import "./App.css";
import axios from "axios";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Visual from "./components/Visual";
import MovieChart from "./components/MovieChart";
import Movies from "./components/Movies";
import Theater from "./components/Theater";

function App() {
  const [movies, setMovies] = useState(false);

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
          <Header />
        </div>
      </div>
      <div class="mainNav col-md-12">
        <div class="container">
          <Nav />
        </div>
      </div>
      <div class="visual col-md-12 fit">
        <Visual />
      </div>

      <div class="movieChart col-md-12">
        <div class="container">
          {movies ? <MovieChart movies={movies} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
