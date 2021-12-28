import { useEffect, useState } from 'react';
import AppRoutes from '../routes/AppRoutes';
import '../sass/main.scss';
import * as exUrls from '../utils/externalUrls';
import getData from '../utils/getData';
import { getAllQuery } from '../utils/queryTypes';
import NavBar from './NavBar';
import UserBar from './UserBar';

const LoggedIn = () => {
  const [getCurrData, setGetCurrData] = useState({});

  useEffect(() => {
    const fetchingData = async () => {
      getData(exUrls.DB_GRAPHQL_URL, exUrls.LOJA_1_TOKEN, getAllQuery, setGetCurrData);
    };
    fetchingData();
  }, []);
  return (
    <div>
      <UserBar />
      <div style={ { display: 'flex' } }>
        <NavBar />
        <main className='App-main-wrapper'>
          { console.log(getCurrData) }
          <AppRoutes />
        </main>
      </div>
    </div>
  );
};

export default LoggedIn;