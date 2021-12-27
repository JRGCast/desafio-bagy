import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingCircle from '../components/LoadingCircle';
import NavBar from '../components/NavBar';
import { landingPageUrl, otherPageUrl } from '../utils/internalUrls';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const OtherPage = lazy(() => import("../pages/OtherPage"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={ landingPageUrl }
          element={
            <Suspense fallback={ <LoadingCircle /> }>
              <LandingPage />
            </Suspense>
          }
        />
        <Route path={ otherPageUrl } element={
          <Suspense fallback={ <LoadingCircle /> }>
            <OtherPage />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;