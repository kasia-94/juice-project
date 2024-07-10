import styled from 'styled-components';

export const AboutBox = styled.div`
  display: flex;

  @media screen and (max-width: 1199px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutImageBox = styled.div`
  display: flex;
`;

export const AboutImage = styled.img`
  width: 550px;

  @media screen and (max-width: 767px) {
    width: 250px;
  }

  @media screen and (max-width: 1199px) {
    width: 350px;
  }
`;

export const AboutTitle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Nerko One', sans-serif;
  margin-bottom: 20px;
  font-size: 35px;
`;

export const AboutPostTitle = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ffffff9d;
`;

export const AboutText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
`;
