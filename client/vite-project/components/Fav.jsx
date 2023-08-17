import React, { useEffect, useState } from 'react';

const FavoritesComponent = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorites when the component mounts
    fetch('http://127.0.0.1:8000/api/getfavorites')
      .then(response => response.json())
      .then(data => setFavorites(data))
      .catch(error => console.error('Fetching Favorites Error:', error));
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesComponent;
