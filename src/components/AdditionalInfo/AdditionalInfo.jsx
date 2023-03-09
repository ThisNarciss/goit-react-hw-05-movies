import PropTypes from 'prop-types';
import {
  AdditionalLabel,
  AdditionalLink,
  AdditionalList,
  ContainerAdditionalInfo,
} from 'styles/StyledComponents.styled';

export function AdditionalInfo({ id, from }) {
  return (
    <ContainerAdditionalInfo>
      <AdditionalLabel>Additional information</AdditionalLabel>
      <AdditionalList>
        <li>
          <AdditionalLink to="cast" state={{ from, id: id }}>
            Cast
          </AdditionalLink>
        </li>
        <li>
          <AdditionalLink to="reviews" state={{ from, id: id }}>
            Reviews
          </AdditionalLink>
        </li>
      </AdditionalList>
    </ContainerAdditionalInfo>
  );
}

AdditionalInfo.propTypes = {
  id: PropTypes.number.isRequired,

  from: PropTypes.object.isRequired,
};
