import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {data?.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
