
// import movies from './movies.json';
import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import styles from './MovieGrid.module.css';


export function MoviesGrid(){

const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch ('https://api.themoviedb.org/3/discover/movie', {
      headers: {
      Authorization: 
        "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2Q0MzI4MjYwZjBmNGMxYTMyZDc0YTIzODM2MmY5MiIsInN1YiI6IjY0MGZmNzRiMzIzZWJhMDA3Y2I4MGFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.shuck1_36aCJEY0-kcwv4tRehcBYQ6n9Q0O1YROMVq0",
        "Content-Type": "application/json;charset=utf-8",
      }
    })
    .then((result) => result.json())
    .then((data) => {
    setMovies(data.results);
})
    
}, []);

    return (
        <ul className={styles.movieGrid}>
           {movies.map((movie) => (
         <MovieCard key={movie.id} movie={movie} />
          ) )}
        </ul>
    );
} 



