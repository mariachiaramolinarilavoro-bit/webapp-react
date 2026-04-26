import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <img
        src={`http://localhost:3000/img/${movie.image}`}
        className="card-img-top"
        alt={movie.title}
        onError={(e) => e.target.src = 'https://placehold.co/300x200?text=No+Image'}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text text-muted">{movie.director}</p>
        <p className="card-text">
          <small>{movie.genre} — {movie.release_year}</small>
        </p>
        <Link to={`/movies/${movie.id}`} className="btn btn-primary btn-sm float-end me-2">
          Dettagli
        </Link>
      </div>
    </div>
  )
}

export default MovieCard