import AppRoutes from '../routes/AppRoutes';
import '../sass/main.scss';
import NavBar from './NavBar';
import UserBar from './UserBar';

const LoggedIn = () => {
  return (
    <div>
      <UserBar />
      <div style={ { display: 'flex' } }>
        <NavBar />
        <main className='App-main-wrapper'>
          <AppRoutes />
        </main>
      </div>
    </div>
  );
};

export default LoggedIn;