import React from "react";

export default function Movie(props) {
  const { id, name, image } = props;

  return (
    <div className="movie-container">
      <div className="movie-img-container">
        <img className="movie-img" src={image} alt={name}/>
      </div>
      <div className="movie-title">{name}</div>
    </div>
  );
}
