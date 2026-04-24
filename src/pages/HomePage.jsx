import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'

function HomePage() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies`)
      .then(res => {
        if (!res.ok) throw new Error('Errore nella risposta del server')
        return res.json()
      })
      .then(data => {
        setMovies(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Errore nel caricamento dei film')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Caricamento in corso...</p>
  if (error) return <p className="text-danger">{error}</p>

  return (
    <>
      <h1 className="mb-4">Lista Film</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map(movie => (
          <div className="col" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  )
}

export default HomePage