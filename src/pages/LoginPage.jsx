import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../sass/main.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const [disableBtn, setDisableBtn] = useState(true);
  const handleClick = () => {
    const inputName = document.querySelector('.Login-input-id').value;
    navigate(`/logged/${inputName}/`);
  };
  const handleChange = () => {
    const inputName = document.querySelector('.Login-input-id').value;
    const inputPassword = document.querySelector('.Login-input-password').value;
    if (inputName !== '' && inputPassword !== '') {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  return (
    <div className='Login-main-wrapper'>
      <fieldset>
        <legend>Login</legend>
        <p>Obs.: A única validação feita é se os campos estão vazios ou não</p>
        <div style={ { display: 'flex', flexDirection: 'column' } }>
          <label>Digite seu Login
            <input className='Login-input-id' type='text' onChange={ handleChange } required />
          </label>
          <label> Digite sua senha
            <input className='Login-input-password' type='password' onChange={ handleChange } required />
          </label>
        </div>
        <button className='Login-submit-btn' type='button' onClick={ handleClick } disabled={ disableBtn }>Ir para LP</button>
      </fieldset>
    </div>

  );
};

export default LoginPage;