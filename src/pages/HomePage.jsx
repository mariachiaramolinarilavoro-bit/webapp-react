import MovieCard from '../components/MovieCard'

const testMovies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi', release_year: 2010, image: 'inception.jpg' },
  { id: 2, title: 'The Godfather', director: 'F.F. Coppola', genre: 'Crime', release_year: 1972, image: 'the_godfather.jpg' },
]

function HomePage() {
  return (
    <>
      <h1 className="mb-4">Lista Film</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {testMovies.map(movie => (
          <div className="col" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  )
}

export default HomePage