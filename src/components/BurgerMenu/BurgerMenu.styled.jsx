import styled from 'styled-components';

export const List = styled.ul`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
`;

export const Item = styled.li`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: #ffffff;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;
