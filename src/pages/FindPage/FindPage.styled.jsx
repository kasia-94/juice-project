import styled from 'styled-components';

export const ContactBox = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    flex-direction: column;

    ul:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Nerko One', sans-serif;
  display: flex;
  margin-bottom: 20px;
  font-size: 30px;

  @media screen and (max-width: 767px) {
    justify-content: center;
    margin-bottom: 18px;
    font-size: 25px;
  }
`;

export const List = styled.ul`
  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
  }

  li {
    margin-bottom: 20px;

    @media screen and (max-width: 767px) {
      margin-bottom: 10px;
    }
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

export const NameIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.div`
  margin-left: 15px;
`;
