import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getAllMovie } from 'services/api';
import { MovieListTitle } from './Home.styled';

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllMovie()
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <MovieListTitle>Trending today</MovieListTitle>
      <MovieList data={data} />
    </main>
  );
};
