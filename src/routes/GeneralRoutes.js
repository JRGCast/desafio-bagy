import { Suspense } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingCircle from '../components/LoadingCircle';
import LoggedIn from '../components/LoggedIn';
import LoginPage from '../pages/LoginPage';
import {
  loginUrl
} from '../utils/internalUrls';
const GeneralRoutes = () => {
  return (
    <Routes>
      <Route path='/'
        element={
          <Suspense fallback={ <LoadingCircle /> }>
            <Navigate to='/login' />
          </Suspense>
        }
      />
      <Route path={ loginUrl }
        element={
          <Suspense fallback={ <LoadingCircle /> }>
            <LoginPage />
          </Suspense>
        }
      />
      <Route path='/logged/:id/*'
        element={
          <Suspense fallback={ <LoadingCircle /> }>
            <LoggedIn />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default GeneralRoutes;