import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import LoadingCircle from '../components/LoadingCircle';
import NavBar from '../components/NavBar';
import { Clients, Configurations, GeneralVision, NotFound, PlansNAchvmts, Products, Sales, Stores } from '../pages';
import { clientsUrl, configsUrl, generalVUrl, landingPageUrl, otherPageUrl, planNAchvmntsUrl, productsUrl, salesUrl, storesUrl } from '../utils/internalUrls';

const LandingPage = lazy(() => import('../pages/LandingPage'));
const OtherPage = lazy(() => import("../pages/OtherPage"));

const AppRoutes = () => {
  return (
    <>
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
        <Route path={ generalVUrl } element={
          <Suspense fallback={ <LoadingCircle /> }>
            <GeneralVision />
          </Suspense>
        } />
        <Route path={ storesUrl } element={
          <Suspense fallback={ <LoadingCircle /> }>
            <Stores />
          </Suspense>
        } />
        <Route path={ salesUrl } element={
          <Suspense fallback={ <LoadingCircle /> }>
            <Sales />
          </Suspense>
        } />
        <Route path={ clientsUrl } element={
          <Suspense fallback={ <LoadingCircle /> }>
            <Clients />
          </Suspense>
        } />
        <Route path={ productsUrl } element={
          <Suspense fallback={ <LoadingCircle /> }>
            <Products />
          </Suspense>
        } />
        <Route path={ planNAchvmntsUrl } element={
          <Suspense fallback={ <LoadingCircle /> }>
            <PlansNAchvmts />
          </Suspense>
        } />
        <Route path={ configsUrl } element={
          <Suspense fallback={ <LoadingCircle /> }>
            <Configurations />
          </Suspense>
        } />
        <Route path='*' element={
          <Suspense fallback={ <LoadingCircle /> }>
            <NotFound />
          </Suspense>
        } />
      </Routes>
    </>
  );
};

export default AppRoutes;