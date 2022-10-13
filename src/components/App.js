import React, { useState } from "react";
import '../css/app.css'
import MovieList from "./MovieList";
import lotr from "../images/lotr.jpg";
import lebowski from "../images/lebowski.jpg"
import princessBride from "../images/princess-bride.jpg"
import interstellar from "../images/interstellar.jpg"
import goodfellas from "../images/goodfellas.jpg"
import nakedGun from "../images/naked-gun.jpg"
import departed from "../images/departed.jpg"
import dune from "../images/dune.jpg"
import montyPython from "../images/monty-python.jpg"
import prestige from "../images/prestige.jpg"
import airplane from "../images/airplane.jpg"
import shrek from "../images/shrek.jpg"

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
  },
  {
    id: 3,
    name: "The Princess Bride",
    image: princessBride,
  },
  {
    id: 4,
    name: "Interstellar",
    image: interstellar,
  },
  {
    id: 5,
    name: "Goodfellas",
    image: goodfellas,
  },
  {
    id: 6,
    name: "Naked Gun",
    image: nakedGun,
  },
  {
    id: 7,
    name: "The Departed",
    image: departed,
  },
  {
    id: 8,
    name: "Dune",
    image: dune,
  },
  {
    id: 9,
    name: "Monty Python & The Holy Grail",
    image: montyPython,
  },
  {
    id: 10,
    name: "The Prestige",
    image: prestige,
  },
  {
    id: 11,
    name: "Airplane!",
    image: airplane,
  },
  {
    id: 12,
    name: "Shrek",
    image: shrek,
  },
];
