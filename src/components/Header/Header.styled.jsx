import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 320px) {
    padding: 5px;
  }

  @media screen and (min-width: 480px) {
    padding: 10px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    padding: 40px;
  }

  @media screen and (min-width: 1400px) {
    padding: 40px;
  }
`;
