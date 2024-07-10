import { BackgroundMango, Container } from 'components/GlobalStyles';
import { Header } from 'components/Header/Header';
import { ContactBox, List, Name, NameIcon, Title } from './FindPage.styled';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const contacts = [
  {
    id: 1,
    href: 'https://maps.app.goo.gl/k6LnFL4aqyXUpMDZ7',
    target: '_blank',
    rel: 'noreferrer noopener nofollower',
    name: '255 Beaconsfield Rd, London, Great Britain',
    icon: <FaMapMarkerAlt size={25} />,
  },
  {
    id: 2,
    href: 'tel:+380441111111',
    target: '',
    rel: '',
    name: '+38 044 111 11 11',
    icon: <FaPhoneAlt size={25} />,
  },
  {
    id: 3,
    href: 'mailto:juice_more@gmail.com',
    target: '',
    rel: '',
    name: 'juice_more@gmail.com',
    icon: <FaMailBulk size={25} />,
  },
];

const social = [
  {
    id: 4,
    href: 'https://www.facebook.com',
    target: '_blank',
    rel: 'noreferrer noopener nofollower',
    name: 'Facebook',
    icon: <FaFacebook size={25} />,
  },
  {
    id: 5,
    href: 'https://twitter.com/',
    target: '_blank',
    rel: 'noreferrer noopener nofollower',
    name: 'Twitter',
    icon: <FaTwitter size={25} />,
  },
  {
    id: 6,
    href: 'https://www.instagram.com',
    target: '_blank',
    rel: 'noreferrer noopener nofollower',
    name: 'Instagram',
    icon: <FaInstagram size={25} />,
  },
];

export const FindPage = () => {
  return (
    <BackgroundMango>
      <Header />
      <Container>
        <div>
          <ContactBox>
            <List>
              <Title>Contacts</Title>
              {contacts.map(({ name, href, target, rel, id, icon }) => {
                return (
                  <li key={id}>
                    <a href={href} target={target} rel={rel}>
                      <NameIcon>
                        {icon}
                        <Name>{name}</Name>
                      </NameIcon>
                    </a>
                  </li>
                );
              })}
            </List>
            <List>
              <Title> We are in social networks</Title>
              {social.map(({ name, href, target, rel, id, icon }) => {
                return (
                  <li key={id}>
                    <a href={href} target={target} rel={rel}>
                      <NameIcon>
                        {icon}
                        <Name>{name}</Name>
                      </NameIcon>
                    </a>
                  </li>
                );
              })}
            </List>
          </ContactBox>
        </div>
      </Container>
    </BackgroundMango>
  );
};
