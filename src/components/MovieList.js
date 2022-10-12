import React from 'react'
import Movie from './Movie'

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
        {movies.map(movie => {
            return (
                <Movie key={movie.id} {...movie} />
            )
        })}
    </div>
  )
}
