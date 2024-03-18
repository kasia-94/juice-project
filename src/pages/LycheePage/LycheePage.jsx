import { BackgroundLychee, Container } from 'components/GlobalStyles';
import { Header } from 'components/Header/Header';
import { Product } from 'components/Product/Product';
import hero from '../../assets/lychee-juice.webp';

export const LycheePage = () => {
  return (
    <BackgroundLychee>
      <Header />
      <Container>
        <Product
          title="Lychee"
          desc="Taste of Tropical Bliss:
Our Lychee Juice is a celebration of the unique lychee fruit's natural essence. With a harmonious blend of sweetness and floral undertones, it offers a distinctive flavor that will leave you longing for more. Our expert juicers skillfully extract the purest juices from the juiciest lychees, ensuring every drop is brimming with authentic taste and goodness."
          hero={hero}
        />
      </Container>
    </BackgroundLychee>
  );
};
