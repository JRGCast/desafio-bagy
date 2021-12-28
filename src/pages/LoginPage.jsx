import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const navigateToLPage = () => navigate('/');
  return (
    <div>
      <h1>Login</h1>
      <button type='submit' onClick={ navigateToLPage }>Ir para LP</button>
    </div>
  );
};

export default LoginPage;