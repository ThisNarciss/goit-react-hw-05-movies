import { fetchSearchMovies } from 'api/movies-api';
import { useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  ButtonSubmit,
  Form,
  Input,
  Section,
  StyledLink,
  List,
} from 'styles/StyledComponents.styled';

export default function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    fetchSearchMovies(query)
      .then(({ results }) => setSearchMovies(results))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value });
  }

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Input name="search" type="text" />
        <ButtonSubmit type="submit">Search</ButtonSubmit>
      </Form>
      {isLoading && (
        <Grid
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <List>
        {searchMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </li>
          );
        })}
      </List>
    </Section>
  );
}
