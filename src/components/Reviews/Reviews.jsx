import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => {
        setMovieReviews(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);
  return (
    <div>
      <ul>
        {movieReviews?.length
          ? movieReviews?.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))
          : ''}
        {!movieReviews?.length && movieReviews !== null && (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
