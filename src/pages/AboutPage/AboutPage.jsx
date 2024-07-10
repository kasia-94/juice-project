import { BackgroundOrange, Container } from 'components/GlobalStyles';
import { Header } from 'components/Header/Header';
import aboutImage from '../../assets/about-image.webp';
import {
  AboutBox,
  AboutImage,
  AboutPostTitle,
  AboutText,
  AboutTitle,
} from './AboutPage.styled';

export const AboutPage = () => {
  return (
    <BackgroundOrange>
      <Header />
      <Container>
        <AboutBox>
          <div>
            <AboutImage src={aboutImage} alt="aboutImage" />
          </div>
          <div>
            <AboutTitle>About Juice'n'More</AboutTitle>
            <AboutPostTitle>
              Our focus is on harnessing the goodness of nature to bring you
              juices that are not only delicious but also nourishing for your
              customers.
            </AboutPostTitle>
            <AboutText>
              We are a wholesale natural juice company. We are delighted to
              provide you with high quality, refreshing, and all natural juices
              that will enhance the offerings at your cafe or restaurant. Our
              commitment to excellence and dedication to sourcing the finest
              natural ingredients sets us apart in the industry. At Juice &
              More, we understand the importance of serving beverages that not
              only taste exceptional but also promote wellbeing.
            </AboutText>
            <AboutText>
              Partnering with us means not only gaining access to our
              exceptional juices but also receiving outstanding customer
              service. We are here to support you every step of the way, from
              product recommendations to timely deliveries that meet your
              requirements. Our team is dedicated to building strong and lasting
              relationships with our valued partners.
            </AboutText>
            <AboutText>
              Join us in our mission to promote health and wellness through the
              pure joy of natural juices. Together, we can create unforgettable
              experiences for your customers and contribute to a healthier
              community. Contact us today to discover how we can enhance your
              menu with our exquisite range of all natural juices and smoothies.
            </AboutText>
          </div>
        </AboutBox>
      </Container>
    </BackgroundOrange>
  );
};
