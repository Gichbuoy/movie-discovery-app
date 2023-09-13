import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div data-testid="movie-card" className="bg-white p-4 rounded shadow">
      <img data-testid="movie-poster" src={movie.poster} alt={movie.title} className="w-full h-48 object-cover mb-4" />
      <h3 data-testid="movie-title" className="text-lg font-bold mb-2">{movie.title}</h3>
      <p data-testid="movie-release-date">{movie.releaseDate}</p>
    </div>
  );
}

export default MovieCard;
