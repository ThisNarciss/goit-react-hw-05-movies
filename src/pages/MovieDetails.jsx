import { fetchMoviesDetails } from 'api/movies-api';

import { useEffect, useState } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';

export function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesDetails(movieId).then(data => setDetails(data));
  }, [movieId]);

  return (
    <div>
      {details && (
        <div>
          <div>
            <Link to={location.state.from}>Back to products</Link>
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              alt={details.original_title}
              width="300"
            />
          </div>

          <div>
            <h2>{`${details.original_title} (${details.release_date.slice(
              0,
              4
            )})`}</h2>
            <p>User Score: {Math.round((details.vote_average * 100) / 10)}%</p>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{details.overview}</p>
          </div>
          <div>
            <h2>Genres</h2>
            <p>{details.genres.map(genre => genre.name).join(' ')}</p>
          </div>
          <ul>
            <li>
              <Link
                to="cast"
                state={{ from: { ...location.state.from }, id: details.id }}
              >
                Cats
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                state={{ from: { ...location.state.from }, id: details.id }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      )}

      <Outlet />
    </div>
  );
}
