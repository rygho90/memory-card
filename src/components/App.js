import React, { useState } from "react";
import MovieList from "./MovieList";

export default function App() {
  const [currScore, setCurrScore] = useState();
  const [bestScore, setBestScore] = useState();

  return (
    <div>
      <div className="header">
        <div className="header-side">
          <h1 className="header-title">Movie Memory</h1>
          <div className="header-instructions">
            Get points by clicking on an image, but don't click any image more
            than once.
          </div>
        </div>
        <div className="header-side">
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
    image: "lotr",
  },
  {
    id: 2,
    name: "The Big Lebowski",
    image: "lebowski",
  }
];
