import React, { useState } from "react";
import '../css/app.css'
import MovieList from "./MovieList";
import lotr from "../images/lotr.jpg";
import lebowski from "../images/lebowski.jpg"

export default function App() {
  const [currScore, setCurrScore] = useState();
  const [bestScore, setBestScore] = useState();

  return (
    <div className="main">
      <div className="header">
        <div className="header-side">
          <h1 className="header-title">Movie Memory Game</h1>
          <div className="header-instructions">
            Get points by clicking on an image, but don't click any image more
            than once.
          </div>
        </div>
        <div className="header-side header-scores">
          <div className="header-score">Score: 0</div>
          <div className="header-score">Best Score: 0</div>
        </div>
      </div>

      <MovieList movies={movies} />
    </div>
  );
}

const movies = [
  {
    id: 1,
    name: "Lord of the Rings",
    image: lotr,
  },
  {
    id: 2,
    name: "The Big Lebowski",
    image: lebowski,
  }
];
