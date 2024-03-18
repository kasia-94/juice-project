import styled, { createGlobalStyle } from 'styled-components';
import backgroundOrange from '../assets/orange-theme.webp';
import backgroundMango from '../assets/mango-theme.webp';
import backgroundLychee from '../assets/lychee-theme.webp';
export const GlobalStyles = createGlobalStyle`

html {
  height: 100%;

}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  list-style: none;
}
img {
  display: block;
  width: 100%;
}
a {
  text-decoration: none;
  color: inherit;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  height: 100%;

  @media screen and (min-width: 320px) {
    width: 300px;
    padding: 5px 0;
  }

  @media screen and (min-width: 480px) {
    width: 460px;
    padding: 10px 0;
  }

  @media screen and (min-width: 768px) {
    width: 728px;
    padding: 20px 0;
  }

  @media screen and (min-width: 1200px) {
    width: 1140px;
    padding: 40px 0;
  }

  @media screen and (min-width: 1400px) {
    width: 1380px;
    padding: 40px 0;
  }
`;

export const BackgroundOrange = styled.div`
  background-image: url(${backgroundOrange});
  background-color: #f28002;
  max-width: 100%;
  flex-grow: 1;
  z-index: 100;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BackgroundMango = styled.div`
  background-image: url(${backgroundMango}),
    linear-gradient(to right, rgba(22, 23, 24, 0.5), rgba(22, 23, 24, 0.37));
  background-color: #ffd700;
  max-width: 100%;
  flex-grow: 1;
  z-index: 100;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BackgroundLychee = styled.div`
  background-image: url(${backgroundLychee});
  background-color: #db393e;
  max-width: 100%;
  flex-grow: 1;
  z-index: 100;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
