import { IconBar } from 'components/IconBar/IconBar';
import {
  Description,
  DescriptionBox,
  Hero,
  Ellipse,
  MainBox,
  Title,
  HeroBox,
} from './Product.styled';

export const Product = ({ title, desc, hero }) => {
  return (
    <MainBox>
      <DescriptionBox>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <IconBar />
      </DescriptionBox>

      <HeroBox>
        <Hero src={hero} alt="hero" />
        <Ellipse></Ellipse>
      </HeroBox>
    </MainBox>
  );
};
