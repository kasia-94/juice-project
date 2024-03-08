import { Button, List, Nav, Navlink } from './Navigation.styled';

const menu = [
  { id: 1, src: '/', name: 'Flavors' },
  { id: 2, src: '/find', name: 'Find us' },
  { id: 3, src: '/about', name: 'About Us' },
  { id: 4, src: '/franchise', name: 'Franchise' },
];

export const Navigation = () => {
  return (
    <Nav>
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
    </Nav>
  );
};
