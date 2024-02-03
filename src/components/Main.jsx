import React, { useState } from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';
import './Main.css';

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const apiKey = 'fa5a9e44';
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchQuery}`);
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovieData(data);
      } else {
        setMovieData(null);
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='container1'>
        <h1>Movie Search App</h1>
        <input
          type="text"
          placeholder="Enter movie title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {loading && (
          <div className="spinner-container">
            <MDBSpinner role='status'>
              <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
          </div>
        )}

        {movieData && !loading && (
          <div>
            <h2>{movieData.Title} ({movieData.Year})</h2>
            <img className={`${movieData && 'poster'}`} src={movieData.Poster} alt={movieData.Title} />
            <p>Plot: {movieData.Plot}</p>
            <p>Genre: {movieData.Genre}</p>
            <p>Director: {movieData.Director}</p>
            <p>IMDb Rating: {movieData.imdbRating}/10</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
