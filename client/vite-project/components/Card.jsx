import React from 'react';
import './Card.css';

const Card = (props) => {
  const handleClick = async (title, year, type) => {
    try {
      const data = { title, year, type };

      const response = await fetch('http://127.0.0.1:8000/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Favorite added successfully');
      } else {
        console.error('Error adding favorite');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="card-container">
      {props.movie && props.movie.length > 0 ? (
        props.movie.map((movie, index) => (
          <div className="card" key={index}>
            <img src={movie.Poster} alt='movie' />
            <p className='title'>{movie.Title}</p>
            <p className='year'>{movie.Year}</p>
            <p className='type'>{movie.Type}</p>
            <p className='fav' onClick={() => handleClick(movie.Title, movie.Year, movie.Type)}>fav</p>
          </div>
        ))
      ) : (
        <h1 className="no-movies">Oops!! Sorry, But No Movie Found</h1>
      )}
    </div>
  );
}

export default Card;
