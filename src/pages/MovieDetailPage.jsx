import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import { useLoader } from '../context/LoaderContext'

function MovieDetailPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [error, setError] = useState(null)
  const { setLoading } = useLoader()

  useEffect(() => {
    setLoading(true)
    fetch(`${import.meta.env.VITE_API_URL}/movies/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Film non trovato')
        return res.json()
      })
      .then(data => {
        setMovie(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Film non trovato')
        setLoading(false)
      })
  }, [id])

  function handleReviewAdded(newReview) {
    setMovie(prevMovie => ({
      ...prevMovie,
      reviews: [...prevMovie.reviews, newReview]
    }))
  }

  if (error) return <p className="text-danger">{error}</p>

  if (!movie) return null

  return (
    <>
      <Link to="/" className="btn btn-secondary mb-4">← Torna alla lista</Link>

      <div className="row mb-5">
        <div className="col-md-4">
          <img
            src={`${import.meta.env.VITE_API_URL}/img/${movie.image}`}
            className="img-fluid rounded"
            alt={movie.title}
            onError={(e) => e.target.src = 'https://placehold.co/300x400?text=No+Image'}
          />
        </div>
        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p><strong>Regista:</strong> {movie.director}</p>
          <p><strong>Genere:</strong> {movie.genre}</p>
          <p><strong>Anno:</strong> {movie.release_year}</p>
          <p>{movie.abstract}</p>
        </div>
      </div>

      <h3 className="mb-3">Recensioni</h3>
      {movie.reviews.length === 0 ? (
        <p>Nessuna recensione disponibile.</p>
      ) : (
        movie.reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))
      )}

      <ReviewForm movieId={id} onReviewAdded={handleReviewAdded} />
    </>
  )
}

export default MovieDetailPage