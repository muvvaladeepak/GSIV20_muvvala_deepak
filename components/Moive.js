import React from "react";

const FEATURED_API ="https://api.themoviedb.org/3/movie/550?api_key=172d88aa862df3a1570c2a7fa073dbcc";

const Moive = ({title,poster_path,overview,
vote_average }) => (
<div
className='movie'>
    

    <img src={FEATURED_API + poster_path} alt={title}/>
    <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
    </div>
    <div className="movie-over">
        <h2>overview</h2>
        <p>{overview}</p>

    </div>
   .movie 
</div>
);

export default Moive;