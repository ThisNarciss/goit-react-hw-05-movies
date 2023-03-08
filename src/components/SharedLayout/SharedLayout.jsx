import { Suspense } from 'react';
import { Grid } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Nav } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
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
    </Container>
  );
}
