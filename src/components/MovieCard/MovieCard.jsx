import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import {
  BackLink,
  ContainerDetails,
  ContainerInfo,
} from 'styles/StyledComponents.styled';

const DEFAULT_IMG = 'https://dummyimage.com/300x450/666566/fff.jpg';

export function MovieCard({ details, from }) {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    id,
  } = details;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : DEFAULT_IMG;
  const score = Math.round((vote_average * 100) / 10);
  const date = release_date.slice(0, 4);
  const genresName = genres.map(genre => genre.name).join(' ');

  return (
    <ContainerDetails>
      <div>
        <BackLink to={from}> &lArr; Go back</BackLink>
        <img src={poster} alt={original_title} width="300" />
      </div>
      <ContainerInfo>
        <div>
          <h2>{`${original_title} (${date})`}</h2>
          <p>User Score: {score}%</p>
        </div>
        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div>
          <h2>Genres</h2>
          <p>{genresName}</p>
        </div>
      </ContainerInfo>
      <AdditionalInfo id={id} from={from} />
    </ContainerDetails>
  );
}
