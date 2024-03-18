import { BackgroundOrange, Container } from 'components/GlobalStyles';

import { Header } from 'components/Header/Header';
import { Product } from 'components/Product/Product';
import hero from '../../assets/orange-juice.webp';

export const OrangePage = () => {
  return (
    <BackgroundOrange>
      <Header />
      <Container>
        <Product
          title="Orange"
          desc="Harvesting Nature's Each glass of Orange Juice is a celebration of
            nature's bountiful harvest. Handpicked from lush orchards, the
            ripest and juiciest oranges are carefully selected to ensure the
            finest quality. With each bottle, you experience the essence of
            sun-drenched groves and the care put into crafting this
            thirst-quenching masterpiece."
          hero={hero}
        />
      </Container>
    </BackgroundOrange>
  );
};
