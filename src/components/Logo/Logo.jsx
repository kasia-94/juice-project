import { NavLink } from 'react-router-dom';
import { LogoIcon } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <LogoIcon />
      </NavLink>
    </>
  );
};
