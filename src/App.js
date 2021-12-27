import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import './sass/main.scss';
import * as exUrls from './utils/externalUrls';
import getData from './utils/getData';
import { getAllQuery } from './utils/queryTypes';

function App() {
  const [getCurrData, setGetCurrData] = useState({});

  useEffect(() => {
    const fetchingData = async () => setGetCurrData(getData(exUrls.DB_GRAPHQL_URL, exUrls.LOJA_1_TOKEN, getAllQuery));
    fetchingData();
  }, [getCurrData]);
  return (
    <div style={ { display: 'flex' } }>
      <NavBar />
      <main>
        { console.log(getCurrData) }
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
