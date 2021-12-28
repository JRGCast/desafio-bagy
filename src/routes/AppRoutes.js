import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingCircle from '../components/LoadingCircle';
import {
  clientsUrl, configsUrl, generalVUrl, landingPageUrl,
  loginUrl, planNAchvmntsUrl, productsUrl, salesUrl, storesUrl
} from '../utils/internalUrls';
const LandingPage = lazy(() => import('../pages/LandingPage'));
const Clients = lazy(() => import('../pages/Clients'));
const Configurations = lazy(() => import('../pages/Configurations'));
const GeneralVision = lazy(() => import('../pages/GeneralVision'));
const NotFound = lazy(() => import('../pages/NotFound'));
const PlansNAchvmts = lazy(() => import('../pages/PlansNAchvmts'));
const Products = lazy(() => import('../pages/Products'));
const Sales = lazy(() => import('../pages/Sales'));
const Stores = lazy(() => import('../pages/Stores'));
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/'
          element={
            <Suspense fallback={ <LoadingCircle /> }>
              <Navigate to={ landingPageUrl } />
            </Suspense>
          }>
        </Route>
        <Route path={ landingPageUrl }
          element={
            <Suspense fallback={ <LoadingCircle /> }>
              <LandingPage />
            </Suspense>
          }
        />
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
        <Route path={ loginUrl } element={
          <Suspense fallback={ <LoadingCircle /> }>
            <Navigate to='/login' />
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