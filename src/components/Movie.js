import React, { useContext } from "react";
import { MovieContext } from "./App";

export default function Movie(props) {
  const { id, name, image } = props;
  const { handleShuffle } = useContext(MovieContext)

  return (
    <div className="movie-container" onClick={handleShuffle}>
      <div className="movie-img-container">
        <img className="movie-img" src={image} alt={name}/>
      </div>
      <div className="movie-title">{name}</div>
    </div>
  );
}
