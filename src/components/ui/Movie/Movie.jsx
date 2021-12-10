import './movie.css'

const Movie = ({ movie }) => {
    return (
        <div className="display-movie">
            <a href="/">
                <figure className="movie__img--wrapper">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" className="movie__img" />
                </figure>
            </a>
        </div>
    )
}

export default Movie