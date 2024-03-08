import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;

  margin-right: 50px;

  li {
    margin-right: 20px;
  }

  li:last-child {
    margin-right: 0;
  }
`;

export const Navlink = styled(NavLink)`
  font-family: 'Nerko one';
  font-weight: 400;
  font-size: 28px;
  transition: text-shadow 250ms ease-in-out;

  &:active,
  &:hover,
  &:focus {
    -webkit-text-stroke: 1px #000;
    text-shadow: 2px 2px 5px #000;
  }
`;

export const Button = styled.button`
  width: 354px;
  height: 72px;
  font-family: 'Poppins';
  font-size: 24px;
  border: 3px solid #ffffff;
  border-radius: 45px;
  background-color: transparent;
  color: #ffffff;
  text-transform: uppercase;
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  cursor: pointer;

  &:active,
  &:hover {
    background-color: #ffffff;
    color: #ffffff;
    -webkit-text-stroke: 1px #000;
    text-shadow: 2px 2px 5px #000;
  }
`;
