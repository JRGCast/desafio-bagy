import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useParams } from 'react-router-dom';
import '../sass/main.scss';
const UserBar = () => {
  const { id } = useParams();
  return (
    <div className='UserBar-main-wrapper'>
      <header className='UserBar-header'>
        <h3 className='UserBar-greetings'>
          Olá { id }! { " " } <AccountCircleTwoToneIcon />
        </h3>
      </header>
    </div>
  );
};

export default UserBar;