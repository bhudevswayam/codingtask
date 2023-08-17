import React, { useEffect, useState } from 'react';
import './App.css';
import Card from '../components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiCall(searchQuery);
  };

  const apiCall = async (searchQuery) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=555f60ab`);
    const data = await response.json();
    if (data && data.Search) {
      setMovie(data.Search);
    } else {
      setMovie([]); // Clear the movies array
    }
  };

  useEffect(() => {
    apiCall(searchQuery);
  }, []);

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>

      </form>
      <Card movie={movie} />
    </div>
  );
}

export default App;