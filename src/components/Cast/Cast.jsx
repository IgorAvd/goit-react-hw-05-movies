import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState(null);
  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => {
        setMovieCredits(response.data.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);
  return (
    <div>
      {movieCredits && (
        <ul>
          {movieCredits.map(credit => (
            <li key={credit.id}>
              <img
                src={
                  credit.profile_path
                    ? `https://image.tmdb.org/t/p/w200${credit.profile_path}`
                    : ''
                }
                alt={credit.original_name}
              />

              <p>{credit.name}</p>
              <p>Character: {credit.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
