import { fetchMoviesCredits } from 'api/movies-api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_IMG = 'https://dummyimage.com/100x150/949494/fff.jpg';

export function Cast() {
  const { state } = useLocation();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchMoviesCredits(state.id).then(({ cast }) => setActors(cast));
  }, [state]);

  return (
    <ul>
      {actors.map(({ id, character, name, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : DEFAULT_IMG
              }
              alt={name}
              width="100"
            />
            <h2>{name}</h2>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
}
