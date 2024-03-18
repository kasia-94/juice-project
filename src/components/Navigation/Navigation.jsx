import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import {
  Burger,
  BurgerList,
  Button,
  ButtonClose,
  List,
  Menu,
  Navlink,
} from './Navigation.styled';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';

const menu = [
  { id: 1, src: '/', name: 'Flavors' },
  { id: 2, src: '/find', name: 'Find us' },
  { id: 3, src: '/about', name: 'About Us' },
  { id: 4, src: '/franchise', name: 'Franchise' },
];

export const Navigation = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <nav>
      <Menu>
        <List>
          {menu.map(({ id, src, name }) => {
            return (
              <li key={id}>
                <Navlink to={src}>{name}</Navlink>
              </li>
            );
          })}
        </List>
        <Button>online store</Button>
      </Menu>
      <Burger onClick={toggleBurger}>
        {burgerOpen ? (
          <BurgerList>
            <ButtonClose onClick={toggleBurger}>
              <FiX />
            </ButtonClose>
            <ul>
              {menu.map(({ id, src, name }) => {
                return (
                  <li key={id}>
                    <Navlink to={src}>{name}</Navlink>
                  </li>
                );
              })}
            </ul>

            <Button>online store</Button>
          </BurgerList>
        ) : (
          <BurgerMenu />
        )}
      </Burger>
    </nav>
  );
};
