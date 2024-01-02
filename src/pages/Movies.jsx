import { MovieList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'services/api';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(() => {
    const savedMovies = localStorage.getItem('searchedMovies');
    return savedMovies ? JSON.parse(savedMovies) : null;
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await getMovieBySearch(movieName);
      setSearchMovies(response.data.results);
      localStorage.setItem(
        'searchedMovies',
        JSON.stringify(response.data.results)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SearchBox
        value={movieName}
        onSubmit={handleSubmit}
        onChange={updateQueryString}
      />
      <MovieList data={searchMovies} />
    </>
  );
};

export default Movies;
