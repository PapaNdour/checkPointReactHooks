import React, { useState } from 'react';
import MovieList from './composants/MovieList';
import Filtre from './composants/Filtre';
import app from './composants/app.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Jurassic Park',
      description: 'Le temps des dinosaures vous dit bonjour!',
      posterURL: 'https://assets.e-cinema.com/UPLOADS/D32475-jurassicpark.jpg',
      rating: 4.5
    },
    {
      title: 'Last Action Hero',
      description: 'Plus fou que lui tu es fou',
      posterURL: 'https://assets.e-cinema.com/UPLOADS/D2B923-last-action-hero-affiche.jpg',
      rating: 5
    },
    {
      title: 'Forrest gump',
      description: 'Vas y, cours!',
      posterURL: 'https://assets.e-cinema.com/UPLOADS/AAF9DF-forrest-gump-affiche.jpg',
      rating: 4.9
    },
    
    
  ]);

  const handleFilter = ({ title, rating }) => {

    const filteredMovies = movies.filter(movie => {
      const isTitleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const isRatingMatch = rating === '' || movie.rating >= parseFloat(rating);
      return isTitleMatch && isRatingMatch;
    });

    setMovies(filteredMovies);
  };

  const handleAddMovie = (newMovie) => {
 
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Ma collection de films</h1>
      <h2>- 2023 -</h2>
      <Filtre onFilter={handleFilter} />
      <MovieList movies={movies} />
      {/* Composant pour ajouter un nouveau film ?????*/}
    </div>
  );
};

export default App;