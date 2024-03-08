import { NavLink } from 'react-router-dom';
import iconOrange from '../../assets/orange-juice.png';
import iconMango from '../../assets/mango-juice.png';
import iconLychee from '../../assets/lychee-juice.png';
import { Item, List } from './IconBar.styled';

const icon = [
  { id: 1, src: iconOrange, alt: 'icon-orange', url: '/orange' },
  { id: 2, src: iconLychee, alt: 'icon-lychee', url: '/lychee' },
  { id: 3, src: iconMango, alt: 'icon-mango', url: '/mango' },
];

export const IconBar = () => {
  return (
    <>
      <List>
        {icon.map(({ id, url, src, alt }) => {
          return (
            <Item key={id}>
              <NavLink to={url}>
                <img src={src} alt={alt} />
              </NavLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};
