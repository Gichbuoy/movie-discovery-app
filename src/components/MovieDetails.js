import React, { useState, useEffect } from 'react'

const MovieDetails = () => {
  const [details] = useState({});

  useEffect(()=> {

  }, []);
  return (
    <div>
      <h2 data-testid="movie-title">{details.title}</h2>
      <p data-testid="movie-release-date">{details.releaseDate}</p>
      <p data-testid="movie-runtime">{details.runtime} minutes</p>
      <p data-testid="movie-overview">{details.overview}</p>
    </div>
  );
}

export default MovieDetails