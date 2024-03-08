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
  font-weight: 400;
  font-size: 150px;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 20px;
  margin-bottom: 50px;
`;

export const Hero = styled.img`
  position: relative;
  width: 750px;
  z-index: 5;
`;

export const HeroBox = styled.div`
  position: relative;
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
`;
