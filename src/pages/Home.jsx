import { fetchPopularMovies } from 'api/movies-api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const [popMovies, setPopMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchPopularMovies().then(({ results }) => {
      setPopMovies(results);
    });
  }, []);

  return (
    <ul>
      {popMovies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
