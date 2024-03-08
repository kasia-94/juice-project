import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { GlobalStyles } from './GlobalStyles';
import { OrangePage } from '../pages/OrangePage/OrangePage';
import { FindPage } from '../pages/FindPage/FindPage';
import { FranchisePage } from '../pages/FranchisePage/FranchisePage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { LycheePage } from 'pages/LycheePage/LycheePage';
import { MangoPage } from 'pages/MangoPage/MangoPage';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<OrangePage />} />
        <Route path="/orange" element={<OrangePage />} />
        <Route path="/lychee" element={<LycheePage />} />
        <Route path="/mango" element={<MangoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
