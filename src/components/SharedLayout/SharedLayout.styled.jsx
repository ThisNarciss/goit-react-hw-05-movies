import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 15px;
  width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 20px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  color: black;
  :active {
    color: red;
  }
`;
