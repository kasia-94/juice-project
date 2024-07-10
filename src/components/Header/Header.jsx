import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { MainHeader } from './Header.styled';

export const Header = () => {
  return (
    <MainHeader>
      <Logo />
      <Navigation />
    </MainHeader>
  );
};
