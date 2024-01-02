import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  const handleHomeClick = () => {
    localStorage.removeItem('searchedMovies');
  };

  return (
    <>
      <Header>
        <nav>
          <Link onClick={handleHomeClick} to="/">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
