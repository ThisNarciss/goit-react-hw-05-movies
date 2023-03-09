import { fetchPopularMovies } from 'api/movies-api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Section } from 'styles/StyledComponents.styled';

export default function Home() {
  const [popMovies, setPopMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchPopularMovies()
      .then(({ results }) => {
        setPopMovies(results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Section>
      {Boolean(popMovies.length) && (
        <MoviesList movies={popMovies} location={location} />
      )}
    </Section>
  );
}
