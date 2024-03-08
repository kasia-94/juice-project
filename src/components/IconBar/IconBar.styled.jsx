import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  transition: transform 250ms ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
