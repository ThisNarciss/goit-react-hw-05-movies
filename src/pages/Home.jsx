import { fetchPopularMovies } from 'api/movies-api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List } from 'styles/StyledComponents.styled';
import { StyledLink } from 'styles/StyledComponents.styled';
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
      <List>
        {popMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <StyledLink to={`movies/${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </li>
          );
        })}
      </List>
    </Section>
  );
}
