function ReviewCard({ review }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h6 className="card-title">{review.name}</h6>
        <p className="card-text text-warning">{'⭐'.repeat(review.vote)}</p>
        <p className="card-text">{review.text}</p>
      </div>
    </div>
  )
}

export default ReviewCard