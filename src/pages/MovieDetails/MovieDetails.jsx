import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { MovieDescription, MovieDetailsContainer } from './MovieDetails.styled';
import { BackLink } from 'components/BackLink';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const releaseDate = movieDetails.release_date;
  const releaseYear = new Date(releaseDate).getFullYear();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);
  return (
    <div>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      <MovieDetailsContainer>
        <div>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
                : ''
            }
            alt={movieDetails.original_title}
          />
        </div>
        <MovieDescription>
          <h1>
            {movieDetails.original_title} ({releaseYear})
          </h1>
          <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p> {movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>{movieDetails.genres?.map(genre => genre.name).join(' ')}</p>
        </MovieDescription>
      </MovieDetailsContainer>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
