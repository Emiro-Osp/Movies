import { useParams } from "react-router-dom";
import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails(){

    let { movieId } = useParams();
    console.log(movieId);

    const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    return (
    <div className={styles.detailscontainer}>
    <img className= {`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={imageUrl}/>
    <div className={`${styles.col} ${styles.movieDetails}`}>
        <p> <strong> Title:</strong>  {movie.title}</p>
        <p> <strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')} </p>
        <p> <strong>Description:</strong> {movie.overview}</p>
    </div>
    </div>
    );
};