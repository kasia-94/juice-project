import styled from 'styled-components';

export const MainBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const DescriptionBox = styled.div`
  width: 604px;
`;

export const Title = styled.h1`
  font-family: 'Nerko One', sans-serif;
  text-transform: uppercase;
  margin-bottom: 15px;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    font-size: 70px;
  }
  @media screen and (max-width: 1199px) {
    font-size: 100px;
  }

  font-size: 150px;
`;

export const Description = styled.p`
  @media screen and (max-width: 1199px) {
    font-size: 15px;
  }
  font-size: 20px;
  margin-bottom: 50px;
`;

export const Hero = styled.img`
  position: relative;
  width: 750px;
  z-index: 5;

  @media screen and (max-width: 1199px) {
    width: 450px;
  }
`;

export const HeroBox = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: relative;
    padding-top: 10px;
    margin-left: 10px;
    z-index: 10;
  }
`;

export const Ellipse = styled.div`
  display: block;
  position: absolute;
  width: 800px;
  height: 400px;
  background-color: #ffffff22;
  border-radius: 50% / 100% 100% 0 0;
  margin-top: -360px;
  z-index: 0;

  @media screen and (max-width: 1199px) {
    display: none;
  }
`;
