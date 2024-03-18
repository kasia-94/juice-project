import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

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

  @media screen and (max-width: 1199px) {
    font-size: 20px;
  }
`;

export const Burger = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: relative;
    padding-top: 10px;
    margin-left: 10px;
    z-index: 10;
  }
`;

export const BurgerList = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 240px;
  padding: 15px;
  background-color: #f7d46dd2;
`;

export const Button = styled.button`
  @media screen and (max-width: 1199px) {
    width: 100px;
    height: 40px;
    font-size: 10px;

    margin-top: 20px;
  }

  @media screen and (min-width: 468px) and (max-width: 1199px) {
    width: 150px;
    height: 45px;
    font-size: 14px;
  }
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

export const ButtonClose = styled.button`
  position: absolute;
  left: 190px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border: 0;

  background-color: transparent;
  color: #fff;

  svg {
    width: 40px;
    height: 40px;
  }
`;
