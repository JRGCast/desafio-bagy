import { useNavigate } from "react-router-dom";
import '../sass/main.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const navigateToLPage = async () => {
    const inputName = document.querySelector('.Login-input-id').value;
    navigate(`/logged/${inputName}/`);
  };
  return (
    <div className='Login-main-wrapper'>
      <h1>Login</h1>
      <label>Digite seu Login
        <input className='Login-input-id' type='text'></input>
      </label>
      <button type='submit' onClick={ navigateToLPage }>Ir para LP</button>
    </div>

  );
};

export default LoginPage;