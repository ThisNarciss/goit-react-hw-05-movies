import { fetchSearchMovies } from 'api/movies-api';
import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

export default function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchSearchMovies(query).then(({ results }) => setSearchMovies(results));
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();

    setSearchParams({ query: e.target.search.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="search" type="text" />
        <button type="submit"></button>
      </form>
      <ul>
        {searchMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
