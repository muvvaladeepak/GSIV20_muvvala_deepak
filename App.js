
import './App.css';
import React, { useEffect, useState } from "react";

import Moive from './components/Moive';

const FEATURED_API ="https://api.themoviedb.org/3/movie/550?api_key=172d88aa862df3a1570c2a7fa073dbcc";

function App() {
  const [ movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data)=>{
         console.log(data);
         setMovies(data.results);
    });
  }, []);

  return (
  <div className="movie-container">
    {movies.length > 0 &&
        movies.map((movies) => <Moive key={movies.
     id} {...Moive} />)}
  </div>
     );
}

export default App;
