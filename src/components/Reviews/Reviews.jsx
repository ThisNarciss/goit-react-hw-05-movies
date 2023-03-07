import { fetchMoviesReviews } from 'api/movies-api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Reviews() {
  const { state } = useLocation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(state.id).then(({ results }) => setReviews(results));
  }, [state]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
