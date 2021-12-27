import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from '../components/Loading';
const LandingPage = lazy(() => import('../pages/LandingPage'));
const OtherPage = lazy(() => import("../pages/OtherPage"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <Suspense fallback={ <Loading/> }>
              <LandingPage />
            </Suspense>
          }
        />
        <Route path="/a" element={
          <Suspense fallback={ <Loading/> }> 
            <OtherPage />
          </Suspense>
        } /> 
        {/* rota falhando no netlify */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;