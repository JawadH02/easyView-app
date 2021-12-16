import { Link } from 'react-router-dom'
import './movie.css'

const Movie = ({ movie }) => {
    return (
        <div className="display-movie">
            <Link to={`/movie/${movie.id}`}>
                <figure className="movie__img--wrapper">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" className="movie__img" />
                </figure>
            </Link>
        </div>
    )
}

export default Movie