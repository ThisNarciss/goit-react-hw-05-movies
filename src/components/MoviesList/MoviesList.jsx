import PropTypes from 'prop-types';
import { List, StyledLink } from 'styles/StyledComponents.styled';

export function MoviesList({ movies, location }) {
  return (
    <List>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
          </li>
        );
      })}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  location: PropTypes.object.isRequired,
};
