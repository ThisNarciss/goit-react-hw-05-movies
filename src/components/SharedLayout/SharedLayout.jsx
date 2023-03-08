import { Suspense } from 'react';
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
