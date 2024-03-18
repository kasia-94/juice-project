import { BackgroundMango, Container } from 'components/GlobalStyles';
import { Header } from 'components/Header/Header';
import { Product } from 'components/Product/Product';
import hero from '../../assets/mango-juice.webp';

export const MangoPage = () => {
  return (
    <BackgroundMango>
      <Header />
      <Container>
        <Product
          title="Mango"
          desc="Pure Mango Bliss:
Crafted from the finest, sun-ripened mangoes, our Mango Juice is bursting with the natural sweetness and succulent goodness of this exotic fruit. Every glass of our juice embodies the essence of a sun-kissed mango orchard, delivering an unparalleled taste experience that will leave you craving for more."
          hero={hero}
        />
      </Container>
    </BackgroundMango>
  );
};
