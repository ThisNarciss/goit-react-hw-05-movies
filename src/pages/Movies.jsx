import { fetchSearchMovies } from 'api/movies-api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Toast } from 'components/Toast/Toast';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ButtonSubmit,
  Form,
  Input,
  Section,
  // StyledLink,
  // List,
} from 'styles/StyledComponents.styled';

export default function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    const abortController = new AbortController();
    const signal = abortController.signal;
    setIsLoading(true);

    fetchSearchMovies(query, signal)
      .then(({ results }) => {
        setError(null);
        setSearchMovies(results);
      })
      .catch(error => setError(error.massage))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort();
    };
  }, [query]);

  useEffect(() => {
    if (!error) return;
    toast(`🦄${error} `);
  }, [error]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value.trim() });
    setSearchMovies([]);
  }

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Input name="search" type="text" />
        <ButtonSubmit type="submit">Search</ButtonSubmit>
      </Form>
      {isLoading && <Loader />}
      {Boolean(searchMovies.length) && (
        <MoviesList movies={searchMovies} location={location} />
      )}
      <Toast />
    </Section>
  );
}
