import { fetchMoviesReviews } from 'api/movies-api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Reviews() {
  const { state } = useLocation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(state.id).then(({ results }) => setReviews(results));
  }, [state]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <li>
          <p>Not find any reviews</p>
        </li>
      )}
    </ul>
  );
}
