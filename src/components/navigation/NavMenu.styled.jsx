import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const NavContainer = styled.nav`

`

export const NavList = styled.ul`

  @media screen and (max-width: 767px) {
    background-color: var(--primary-bg);
  }
`;

export const NavListItem = styled.li`
  padding: 10px 20px;
  border-bottom: var(--border-bottom);
`;

export const MenuLink = styled(Button)`
  cursor: pointer;
  color: var(--primary-text);
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  &:hover {
    color: var(--hover-orange);
  }

  @media screen and (min-width: 768px) {
  }
`;
