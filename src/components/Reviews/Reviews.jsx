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
          <p
            style={{
              border: '1px solid red',
              color: 'red',
              padding: '10px 25px',
            }}
          >
            We don't have any reviews for this movie
          </p>
        </li>
      )}
    </ul>
  );
}
