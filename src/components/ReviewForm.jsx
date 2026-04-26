import { useState } from 'react'

function ReviewForm({ movieId, onReviewAdded }) {
  const [name, setName] = useState('')
  const [vote, setVote] = useState('')
  const [text, setText] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    if (!name || !vote || !text) {
      setError('Tutti i campi sono obbligatori')
      return
    }

    if (vote < 1 || vote > 5) {
      setError('Il voto deve essere tra 1 e 5')
      return
    }

    setLoading(true)

    fetch(`${import.meta.env.VITE_API_URL}/movies/${movieId}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, vote: parseInt(vote), text })
    })
      .then(res => {
        if (!res.ok) throw new Error('Errore nel salvataggio')
        return res.json()
      })
      .then(newReview => {
        onReviewAdded(newReview)
        setName('')
        setVote('')
        setText('')
        setLoading(false)
      })
      .catch(() => {
        setError('Errore nel salvataggio della recensione')
        setLoading(false)
      })
  }

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title mb-3">Lascia una recensione</h5>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Voto (1-5)</label>
            <input type="number" className="form-control" value={vote} onChange={(e) => setVote(e.target.value)} min="1" max="5" />
          </div>

          <div className="mb-3">
            <label className="form-label">Recensione</label>
            <textarea className="form-control" value={text} onChange={(e) => setText(e.target.value)} rows="3" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Salvataggio...' : 'Invia recensione'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm