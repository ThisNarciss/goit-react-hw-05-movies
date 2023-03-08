import { fetchMoviesCredits } from 'api/movies-api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CastItem, CastLabel, CastList, CastText } from './Cast.styled';

const DEFAULT_IMG = 'https://dummyimage.com/100x150/949494/fff.jpg';

export default function Cast() {
  const { state } = useLocation();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchMoviesCredits(state.id).then(({ cast }) => setActors(cast));
  }, [state]);

  return (
    <CastList>
      {actors.map(({ id, character, name, profile_path }) => {
        return (
          <CastItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : DEFAULT_IMG
              }
              alt={name}
              width="100"
            />
            <CastLabel>{name}</CastLabel>
            <CastText>{character}</CastText>
          </CastItem>
        );
      })}
    </CastList>
  );
}
