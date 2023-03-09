import { fetchMoviesDetails } from 'api/movies-api';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';

import { Suspense, useEffect, useState } from 'react';

import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Section } from 'styles/StyledComponents.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const from = location.state?.from ?? `/`;

  useEffect(() => {
    fetchMoviesDetails(movieId).then(data => setDetails(data));
  }, [movieId]);

  return (
    <Section>
      {details && <MovieCard details={details} from={from} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
}
