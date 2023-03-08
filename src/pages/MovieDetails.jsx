import { fetchMoviesDetails } from 'api/movies-api';

import { Suspense, useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  Section,
  BackLink,
  ContainerDetails,
  ContainerInfo,
  ContainerAdditionalInfo,
  AdditionalList,
  AdditionalLabel,
  AdditionalLink,
} from 'styles/StyledComponents.styled';

const DEFAULT_IMG = 'https://dummyimage.com/300x450/666566/fff.jpg';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesDetails(movieId).then(data => setDetails(data));
  }, [movieId]);

  return (
    <Section>
      {details && (
        <ContainerDetails>
          <div>
            <BackLink to={location.state.from}> &lArr; Go back</BackLink>
            <img
              src={
                details.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${details.poster_path}`
                  : DEFAULT_IMG
              }
              alt={details.original_title}
              width="300"
            />
          </div>

          <ContainerInfo>
            <div>
              <h2>{`${details.original_title} (${details.release_date.slice(
                0,
                4
              )})`}</h2>
              <p>
                User Score: {Math.round((details.vote_average * 100) / 10)}%
              </p>
            </div>
            <div>
              <h2>Overview</h2>
              <p>{details.overview}</p>
            </div>
            <div>
              <h2>Genres</h2>
              <p>{details.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </ContainerInfo>
          <ContainerAdditionalInfo>
            <AdditionalLabel>Additional information</AdditionalLabel>
            <AdditionalList>
              <li>
                <AdditionalLink
                  to="cast"
                  state={{ from: { ...location.state.from }, id: details.id }}
                >
                  Cats
                </AdditionalLink>
              </li>
              <li>
                <AdditionalLink
                  to="reviews"
                  state={{ from: { ...location.state.from }, id: details.id }}
                >
                  Reviews
                </AdditionalLink>
              </li>
            </AdditionalList>
          </ContainerAdditionalInfo>
        </ContainerDetails>
      )}

      <Suspense
        fallback={
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
        }
      >
        <Outlet />
      </Suspense>
    </Section>
  );
}
