import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { MainHeader } from './Header.styled';
import { Container } from 'components/GlobalStyles';

export const Header = () => {
  return (
    <Container>
      <MainHeader>
        <Logo />
        <Navigation />
      </MainHeader>
    </Container>
  );
};
